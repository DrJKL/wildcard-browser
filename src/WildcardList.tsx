import { ThemeProvider } from '@emotion/react';
import {
  Collapse,
  ListItem,
  ListItemButton,
  ListItemText,
  IconButton,
  createTheme,
} from '@mui/material';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import { blue, pink, red } from '@mui/material/colors';
import { MouseEventHandler, useState } from 'react';
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

export function WildcardList({
  filename,
  entries,
}: {
  filename: string;
  entries: readonly string[];
}) {
  const [open, setOpen] = useState(false);

  const toggleOpen: MouseEventHandler = () => {
    setOpen(!open);
  };

  return (
    <ThemeProvider theme={theme}>
      <Card variant="outlined" className="wildcard-file" key={filename}>
        <CardHeader
          title={WildcardHeaderTitle(filename, toggleOpen)}
          className="wildcards-filename">
          <Button variant="contained" onClick={toggleOpen}>
            Toggle
          </Button>
          <IconButton aria-label="" onClick={toggleOpen}></IconButton>
        </CardHeader>
        <CardContent>
          <Collapse in={open}>
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
}

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

function WildcardHeaderTitle(filename: string, onClick: MouseEventHandler) {
  return (
    <h3>
      <Button variant="contained" onClick={onClick} color="secondary">
        Toggle
      </Button>
      <span>{filename}</span>
    </h3>
  );
}
