import { ThemeProvider } from '@emotion/react';
import { ExpandMore, ExpandLess, Shuffle } from '@mui/icons-material';
import {
  Collapse,
  ListItem,
  ListItemButton,
  ListItemText,
  IconButton,
  createTheme,
} from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import { blue, red } from '@mui/material/colors';
import { MouseEventHandler, useState, useCallback } from 'react';
import { FixedSizeList, ListChildComponentProps } from 'react-window';
import { WildcardFile } from './lib/wildcards';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: red[500],
    },
    secondary: {
      main: blue[500],
    },
  },
});

export const WildcardList = ({
  filename,
  entries,
  wildcards,
}: {
  filename: string;
  entries: readonly string[];
  wildcards: WildcardFile;
}) => {
  const [open, setOpen] = useState(false);

  const toggleOpen: MouseEventHandler = () => {
    setOpen(!open);
  };

  const [, updateState] = useState({});
  const forceUpdate = useCallback(() => updateState({}), []);

  return (
    <ThemeProvider theme={theme}>
      <Card variant="outlined" className="wildcard-file" key={filename}>
        <CardHeader
          title={WildcardHeaderTitle(wildcards, toggleOpen, open, forceUpdate)}
          className="wildcards-filename"></CardHeader>
        <Collapse in={open} mountOnEnter={true}>
          <CardContent>
            <FixedSizeList
              height={400}
              width={'100%'}
              itemSize={50}
              itemCount={entries.length}
              overscanCount={5}
              itemData={{ entries, wildcards, forceUpdate }}>
              {WildcardEntry}
            </FixedSizeList>
          </CardContent>
        </Collapse>
      </Card>
    </ThemeProvider>
  );
};

function WildcardEntry(props: ListChildComponentProps) {
  const { data, index, style } = props;

  const { entries, wildcards, forceUpdate } = data;

  const entry = entries[index];

  const handleClick = () => {
    wildcards.setEntry(index);
    forceUpdate();
  };

  return (
    <ListItem style={style} key={index} component="div" disablePadding>
      <ListItemButton onClick={handleClick}>
        <ListItemText style={{ whiteSpace: 'nowrap' }} primary={entry} />
      </ListItemButton>
    </ListItem>
  );
}

function WildcardHeaderTitle(
  wildcards: WildcardFile,
  onClick: MouseEventHandler,
  isOpen: boolean,
  forceUpdate: () => void,
) {
  const shuffleClick = () => {
    wildcards.setRandomEntry();
    forceUpdate();
  };
  return (
    <h3 className="flex flex-row justify-start cursor-pointer">
      <IconButton onClick={shuffleClick}>
        <Shuffle></Shuffle>
      </IconButton>
      <span className="flex-grow cursor-pointer" onClick={onClick}>
        {wildcards.filename}
      </span>
      <span>{wildcards.getSelectedEntry()}</span>
      <IconButton aria-label="" className="flex-shrink" onClick={onClick}>
        {isOpen ? <ExpandLess></ExpandLess> : <ExpandMore></ExpandMore>}
      </IconButton>
    </h3>
  );
}
