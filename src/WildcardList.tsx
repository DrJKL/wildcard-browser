import {
  ExpandMore,
  ExpandLess,
  Shuffle,
  ContentCopy,
  DataObject,
  Close,
} from '@mui/icons-material';
import {
  Collapse,
  ListItem,
  ListItemButton,
  ListItemText,
  IconButton,
  Tooltip,
  Snackbar,
  Alert,
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
  open?: boolean;
}

export function WildcardList({
  wildcards,
  search,
  open = false,
}: WildcardListProps) {
  const { filename } = wildcards;
  const entries = wildcards.wildcardEntries;
  const [listOpen, setListOpen] = useState(open);
  const [, updateState] = useState({});

  const forceUpdate = useCallback(() => updateState({}), []);
  const toggleListOpen: MouseEventHandler = () => {
    setListOpen(!listOpen);
  };

  const matchesSearch =
    !!search && wildcards.filepath.toLowerCase().includes(search.toLowerCase());

  const [showCopied, setShowCopied] = useState<string | null>(null);
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
    const text = wildcards.toPlaceholder(settings);
    await copyToClipboard(text);
    setShowCopied(`Copied ${text}`);
  };

  const handleDynamicPromptClick: MouseEventHandler = async (
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
    const text = wildcards.toDynamicPromptSnippet();
    await copyToClipboard(text);
    setShowCopied(`Copied ${text}`);
  };

  const handleCopiedClose = () => {
    setShowCopied(null);
  };
  const shuffleClick = () => {
    wildcards.setRandomEntry();
    forceUpdate();
  };
  return (
    <>
      <Card variant="outlined" className="mt-1 mx-1" key={filename}>
        <CardHeader
          sx={{
            '& .MuiCardHeader-content': {
              minWidth: '0',
            },
            '& .MuiCardHeader-action': {
              alignSelf: 'center',
            },
          }}
          avatar={
            <IconButton
              aria-label=""
              className="flex-shrink"
              onClick={toggleListOpen}>
              {listOpen ? <ExpandLess /> : <ExpandMore />}
            </IconButton>
          }
          title={WildcardHeaderTitle({
            wildcards,
            matchesSearch,
            onClick: toggleListOpen,
            isOpen: listOpen,
            forceUpdate,
          })}
          subheader={
            <span className="truncate">
              {wildcards.getSelectedEntry() || '\u00A0'}
            </span>
          }
          action={
            <>
              <IconButton className="flex-auto" onClick={shuffleClick}>
                <Shuffle />
              </IconButton>
              <Tooltip
                enterDelay={1000}
                title={`Copy as Wildcard`}
                placement="left"
                arrow>
                <IconButton
                  className="flex-auto"
                  onClick={handlePlaceholderClick}>
                  <ContentCopy />
                </IconButton>
              </Tooltip>
              <Tooltip
                enterDelay={1000}
                title={`Copy as Dynamic Prompt`}
                placement="left"
                arrow>
                <IconButton
                  className="flex-auto"
                  onClick={handleDynamicPromptClick}>
                  <DataObject />
                </IconButton>
              </Tooltip>
            </>
          }
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
      <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
        open={showCopied !== null}
        onClose={handleCopiedClose}>
        <Alert
          severity="info"
          action={
            <IconButton
              size="small"
              aria-label="close"
              color="inherit"
              onClick={handleCopiedClose}>
              <Close fontSize="small" />
            </IconButton>
          }
          className="max-h-96 overflow-y-auto">
          {showCopied}
        </Alert>
      </Snackbar>
    </>
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
  // isOpen,
  // forceUpdate,
  matchesSearch,
}: WildcardHeaderTitleProps) {
  return (
    <span
      className={`flex-auto cursor-pointer text-3xl  ${
        matchesSearch ? 'text-blue-500' : ''
      }`}
      onClick={onClick}
      title={wildcards.filepath}>
      {wildcards.filename.replace(/\.txt$/, '')}
    </span>
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
