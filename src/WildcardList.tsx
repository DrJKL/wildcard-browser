import { ThemeProvider } from '@emotion/react';
import { ExpandMore, ExpandLess } from '@mui/icons-material';
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
import { MouseEventHandler, useState, memo } from 'react';
import { FixedSizeList, ListChildComponentProps } from 'react-window';

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

export const WildcardList = memo(
  ({ filename, entries }: { filename: string; entries: readonly string[] }) => {
    const [open, setOpen] = useState(false);

    const toggleOpen: MouseEventHandler = () => {
      setOpen(!open);
    };

    return (
      <ThemeProvider theme={theme}>
        <Card variant="outlined" className="wildcard-file" key={filename}>
          <CardHeader
            title={WildcardHeaderTitle(filename, toggleOpen, open)}
            className="wildcards-filename"></CardHeader>
          <CardContent>
            <Collapse in={open} mountOnEnter={true}>
              <FixedSizeList
                height={400}
                width={'100%'}
                itemSize={50}
                itemCount={entries.length}
                overscanCount={5}
                itemData={entries}>
                {renderWildcard}
              </FixedSizeList>
            </Collapse>
          </CardContent>
        </Card>
      </ThemeProvider>
    );
  },
);

function renderWildcard(props: ListChildComponentProps) {
  const { data, index, style } = props;

  return (
    <ListItem style={style} key={index} component="div" disablePadding>
      <ListItemButton>
        <ListItemText style={{ whiteSpace: 'nowrap' }} primary={data[index]} />
      </ListItemButton>
    </ListItem>
  );
}

function WildcardHeaderTitle(
  filename: string,
  onClick: MouseEventHandler,
  isOpen: boolean,
) {
  return (
    <h3 className="flex flex-row justify-start cursor-pointer">
      <span className="flex-grow cursor-pointer" onClick={onClick}>
        {filename}
      </span>
      <IconButton aria-label="" className="flex-shrink" onClick={onClick}>
        {isOpen ? <ExpandLess></ExpandLess> : <ExpandMore></ExpandMore>}
      </IconButton>
    </h3>
  );
}
