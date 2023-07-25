import { ExpandMore, ExpandLess, Shuffle } from '@mui/icons-material';
import {
  Collapse,
  ListItem,
  ListItemButton,
  ListItemText,
  IconButton,
} from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import { MouseEventHandler, useState, useCallback, useContext } from 'react';
import { FixedSizeList, ListChildComponentProps } from 'react-window';
import { WildcardFile } from './lib/wildcards';
import { WildcardSettingsContext } from './lib/Settings';

export interface WildcardListProps {
  wildcards: WildcardFile;
  search: string;
}

export function WildcardList({ wildcards, search }: WildcardListProps) {
  const { filename } = wildcards;
  const entries = wildcards.wildcardEntries;
  const [open, setOpen] = useState(false);
  const [, updateState] = useState({});
  const forceUpdate = useCallback(() => updateState({}), []);
  const settings = useContext(WildcardSettingsContext);

  const toggleOpen: MouseEventHandler = () => {
    setOpen(!open);
  };

  const matchesSearch =
    !!search && wildcards.filepath.toLowerCase().includes(search.toLowerCase());

  return (
    <Card variant="outlined" className="wildcard-file" key={filename}>
      <CardHeader
        title={WildcardHeaderTitle({
          wildcards,
          matchesSearch,
          onClick: toggleOpen,
          isOpen: open,
          forceUpdate,
        })}
        className={`wildcards-filename`}
      />
      <Collapse in={open} mountOnEnter={true}>
        <CardContent>
          <div className="card-details">
            <h3>{wildcards.toPlaceholder(settings)}</h3>
          </div>
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
  );
}

interface WildcardHeaderTitleProps {
  wildcards: WildcardFile;
  onClick: MouseEventHandler;
  isOpen: boolean;
  forceUpdate: () => void;
  matchesSearch: boolean;
}

function WildcardHeaderTitle({
  wildcards,
  onClick,
  isOpen,
  forceUpdate,
  matchesSearch,
}: WildcardHeaderTitleProps) {
  const shuffleClick = () => {
    wildcards.setRandomEntry();
    forceUpdate();
  };
  return (
    <h3 className="flex flex-row justify-start cursor-pointer">
      <IconButton onClick={shuffleClick}>
        <Shuffle />
      </IconButton>
      <span
        className={`flex-grow cursor-pointer ${
          matchesSearch ? 'text-blue-500' : ''
        }`}
        onClick={onClick}
        title={wildcards.filepath}>
        {wildcards.filename}
      </span>
      <span>{wildcards.getSelectedEntry()}</span>
      <IconButton aria-label="" className="flex-shrink" onClick={onClick}>
        {isOpen ? <ExpandLess /> : <ExpandMore />}
      </IconButton>
    </h3>
  );
}

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
