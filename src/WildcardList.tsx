import {
  ExpandMore,
  ExpandLess,
  Shuffle,
  ContentCopy,
} from '@mui/icons-material';
import {
  Collapse,
  ListItem,
  ListItemButton,
  ListItemText,
  IconButton,
  Tooltip,
} from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import { MouseEventHandler, useState, useCallback, useContext } from 'react';
import { FixedSizeList, ListChildComponentProps } from 'react-window';
import { WildcardFile } from './lib/wildcards';
import { WildcardSettingsContext } from './lib/Settings';

async function copyToClipboard(text: string) {
  if ('clipboard' in navigator) {
    return await navigator.clipboard.writeText(text);
  }
}

export interface WildcardListProps {
  wildcards: WildcardFile;
  search: string;
}

export function WildcardList({ wildcards, search }: WildcardListProps) {
  const { filename } = wildcards;
  const entries = wildcards.wildcardEntries;
  const [listOpen, setListOpen] = useState(false);
  const [, updateState] = useState({});

  const forceUpdate = useCallback(() => updateState({}), []);
  const toggleListOpen: MouseEventHandler = () => {
    setListOpen(!listOpen);
  };

  const matchesSearch =
    !!search && wildcards.filepath.toLowerCase().includes(search.toLowerCase());

  return (
    <Card
      classes="mt-0.5"
      variant="outlined"
      className="wildcard-file"
      key={filename}>
      <CardHeader
        title={WildcardHeaderTitle({
          wildcards,
          matchesSearch,
          onClick: toggleListOpen,
          isOpen: listOpen,
          forceUpdate,
        })}
        className={`wildcards-filename`}
      />
      <Collapse in={listOpen} mountOnEnter={true}>
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
  const [showCopied, setShowCopied] = useState(false);
  const settings = useContext(WildcardSettingsContext);

  const handlePlaceholderClick: MouseEventHandler = async (
    event: React.MouseEvent<HTMLHeadingElement>,
  ) => {
    const node = event.target;
    if (window.getSelection && node && node instanceof Node) {
      const selection = window.getSelection();
      const range = document.createRange();
      range?.selectNodeContents(node);
      selection?.removeAllRanges();
      selection?.addRange(range);
    }
    await copyToClipboard(wildcards.toPlaceholder());
    setShowCopied(true);
  };
  const handleCopiedClose = () => {
    setShowCopied(false);
  };
  const shuffleClick = () => {
    wildcards.setRandomEntry();
    forceUpdate();
  };

  return (
    <h3 className="flex flex-row justify-start cursor-pointer">
      <IconButton aria-label="" className="flex-shrink" onClick={onClick}>
        {isOpen ? <ExpandLess /> : <ExpandMore />}
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
      <IconButton onClick={shuffleClick}>
        <Shuffle />
      </IconButton>
      <Tooltip
        leaveDelay={200}
        title={`${wildcards.toPlaceholder(settings)}`}
        open={showCopied}
        onClose={handleCopiedClose}
        placement="left"
        arrow>
        <IconButton onClick={handlePlaceholderClick}>
          <ContentCopy />
        </IconButton>
      </Tooltip>
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
