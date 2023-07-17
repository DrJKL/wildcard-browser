import { useMemo, useState } from 'react';
import { WildcardList } from './WildcardList';
import {
  FolderTree,
  WildcardFile,
  fileTree,
  wildcardCollection,
} from './lib/wildcards';
import {
  AppBar,
  Box,
  Button,
  CssBaseline,
  Drawer,
  IconButton,
  TablePagination,
  Toolbar,
} from '@mui/material';
import { TreeItem, TreeView } from '@mui/lab';
import { Forest, ExpandMore, ChevronRight } from '@mui/icons-material';

const App = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(50);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const wildcardsLocal = useMemo(
    () =>
      [...wildcardCollection].filter(
        (_, idx) => idx >= page * rowsPerPage && idx < (page + 1) * rowsPerPage,
      ),
    [page, rowsPerPage],
  );

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number,
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  const drawerWidth = 400;
  const toggleTree = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <>
      <CssBaseline />
      <AppBar
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
        className="header text-center"
        position="relative">
        <Toolbar className="flex justify-between">
          <IconButton aria-label="" onClick={toggleTree}>
            <Forest />
          </IconButton>
          <h1 className="text-4xl font-extrabold">Wildcard Browser</h1>
          <TablePagination
            component={'div'}
            count={wildcardCollection.length}
            page={page}
            onPageChange={handleChangePage}
            rowsPerPage={rowsPerPage}
            onRowsPerPageChange={handleChangeRowsPerPage}></TablePagination>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        anchor="left"
        open={drawerOpen}
        ModalProps={{ keepMounted: true }}>
        <Toolbar />
        <h2 className="w-full text-center">🌳</h2>
        <FolderTree />
      </Drawer>
      <main className="overflow-y-auto">
        {wildcardsLocal.map((wildcards) => (
          <WildcardList
            key={wildcards.filepath}
            filename={wildcards.filename}
            entries={wildcards.wildcardEntries}
            wildcards={wildcards}></WildcardList>
        ))}
      </main>
    </>
  );
};

function FolderTree() {
  const [expanded, setExpanded] = useState<string[]>([]);

  const nodeIds = new Set<string>();
  const registerNode = (nodeId: string) => {
    nodeIds.add(nodeId);
  };

  const handleToggle = (event: React.SyntheticEvent, nodeIds: string[]) => {
    setExpanded(nodeIds);
  };

  const handleExpandClick = () => {
    setExpanded((oldExpanded) =>
      oldExpanded.length === 0 ? [...nodeIds] : [],
    );
  };

  return (
    <>
      <Box sx={{ mb: 1 }}>
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
          ? folderContents
              .filter((_, i) => i < 50)
              .map((file) => (
                <TreeItem
                  key={file.filepath}
                  nodeId={file.filepath}
                  label={file.filename}></TreeItem>
              ))
          : renderWildcardFolder(folderContents, registerNode, fullPath)}
      </TreeItem>
    );
  });
}



export default App;
