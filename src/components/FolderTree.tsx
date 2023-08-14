import { ChevronRight, ExpandMore } from '@mui/icons-material';
import { TreeItem, TreeView } from '@mui/lab';
import { Box, Button } from '@mui/material';
import { useState } from 'react';
import { FolderTree, fileTree } from '../lib/wildcards';

export function FolderTree() {
  const [expanded, setExpanded] = useState<string[]>([
    ...Object.keys(fileTree),
  ]);

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
      <Box sx={{ mb: 1, justifyContent: 'space-around', display: 'flex' }}>
        <Button onClick={handleExpandClick}>
          {expanded.length === 0 ? 'Expand all' : 'Collapse all'}
        </Button>
      </Box>
      <TreeView
        defaultCollapseIcon={<ExpandMore />}
        defaultExpandIcon={<ChevronRight />}
        expanded={expanded}
        onNodeToggle={handleToggle}>
        {renderWildcardFolder(fileTree, registerNode)}
      </TreeView>
    </>
  );
}
function renderWildcardFolder(
  folder: FolderTree,
  registerNode: (id: string) => void,
  path: string[] = [],
) {
  if (path.length > 100) {
    throw new Error('Too Deep');
  }

  return Object.entries(folder).map(([folderName, folderContents]) => {
    const fullPath = [...path, folderName];
    const fullPathName = fullPath.join('/');
    registerNode(fullPathName);

    return (
      <TreeItem key={fullPathName} nodeId={fullPathName} label={folderName}>
        {Array.isArray(folderContents)
          ? folderContents.map(([file, index]) => (
              <TreeItem
                key={`${index}: ${file.filepath}`}
                nodeId={file.filepath}
                label={`${index}: ${file.filename}`}
              />
            ))
          : renderWildcardFolder(folderContents, registerNode, fullPath)}
      </TreeItem>
    );
  });
}
