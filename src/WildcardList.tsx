import { Collapse, ListItem, ListItemButton, ListItemText } from '@mui/material';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import { MouseEventHandler, useState } from 'react';
import { FixedSizeList, ListChildComponentProps } from 'react-window';

export function WildcardList({
  filename, contents,
}: {
  filename: string;
  contents: string;
}) {
  const [open, setOpen] = useState(false);

  const contentsLines: readonly string[] = contents.split('\n');

  const toggleOpen: MouseEventHandler = () => {
    setOpen(!open);
  };

  return (
    <Card variant="outlined" className="wildcard-file" key={filename}>
      <CardHeader
        title={WildcardHeaderTitle(filename, toggleOpen)}
        className="wildcards-filename">
        {' '}
        <Button variant="contained" onClick={() => setOpen(!open)}>
          Toggle
        </Button>
      </CardHeader>
      <CardContent>
        <Collapse in={open}>
          <FixedSizeList
            height={400}
            width={'100%'}
            itemSize={50}
            itemCount={contentsLines.length}
            overscanCount={5}
            itemData={contentsLines}>
            {renderWildcard}
          </FixedSizeList>
        </Collapse>
        {open ? 'Open' : 'Closed'}
      </CardContent>
    </Card>
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
