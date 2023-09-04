import { Article, ChevronRight, ExpandMore } from '@mui/icons-material';
import { TreeItem, TreeView } from '@mui/lab';
import { Box, Button, Tooltip } from '@mui/material';
import { useEffect, useState } from 'react';
import { FolderTree, WildcardFile, fileTree$ } from '../lib/wildcards';
import { sortBy } from 'lodash';

interface FolderTreeDisplayProps {
  onLeafClick: (entry: WildcardFile) => void;
}

export function FolderTreeDisplay({ onLeafClick }: FolderTreeDisplayProps) {
  const [fileTree, setFileTree] = useState<FolderTree | null>(null);
  const [expanded, setExpanded] = useState<string[]>(() => [
    ...Object.keys(fileTree?.childFolders ?? {}),
  ]);

  useEffect(() => {
    const sub = fileTree$.subscribe({
      next: (fileTree) => {
        setFileTree(fileTree);
      },
    });
    return () => sub.unsubscribe();
  }, []);

  const nodeIds = new Set<string>();
  const registerNode = (nodeId: string) => {
    nodeIds.add(nodeId);
  };

  const handleToggle = (_: React.SyntheticEvent, nodeIds: string[]) => {
    setExpanded(nodeIds);
  };

  const handleExpandClick = () => {
    setExpanded((oldExpanded) =>
      oldExpanded.length === 0 ? [...nodeIds] : [],
    );
  };

  return (
    <>
      <Box sx={{ my: 1, justifyContent: 'space-around', display: 'flex' }}>
        <Button onClick={handleExpandClick}>
          {expanded.length === 0 ? 'Expand all' : 'Collapse all'}
        </Button>
      </Box>
      <TreeView
        defaultCollapseIcon={<ExpandMore />}
        defaultExpandIcon={<ChevronRight />}
        expanded={expanded}
        onNodeToggle={handleToggle}>
        {fileTree && renderWildcardFolder(fileTree, registerNode, onLeafClick)}
      </TreeView>
    </>
  );
}
function renderWildcardFolder(
  folder: FolderTree,
  registerNode: (id: string) => void,
  onLeafClick: (entry: WildcardFile) => void,
  path: string[] = [],
) {
  if (path.length > 100) {
    throw new Error('Too Deep');
  }

  const childFoldersSorted = sortBy(Object.entries(folder.childFolders), [0]);

  return childFoldersSorted.map(([folderName, subTree]) => {
    const fullPath = [...path, folderName];
    const fullPathName = fullPath.join('/');
    registerNode(fullPathName);

    const prunedTxt = folderName.replace(/\.txt$/, '');

    const entry = subTree.childFiles[0];

    const tooltipTitle = entry && (
      <span className="whitespace-pre-line">
        {subTree.childFiles[0]?.wildcardEntries.join('\n')}
      </span>
    );

    const endIcon = entry && (
      <Tooltip
        title={tooltipTitle}
        PopperProps={{
          sx: {
            '& .MuiTooltip-tooltip': {
              maxHeight: '10rem',
              maxWidth: 'none',
              minWidth: '6rem',
              overflowY: 'auto',
            },
          },
        }}>
        <Article />
      </Tooltip>
    );

    return (
      subTree && (
        <TreeItem
          key={fullPathName}
          nodeId={fullPathName}
          label={prunedTxt}
          icon={endIcon}
          onDoubleClick={() => entry && onLeafClick(entry)}>
          {renderWildcardFolder(subTree, registerNode, onLeafClick, fullPath)}
        </TreeItem>
      )
    );
  });
}
