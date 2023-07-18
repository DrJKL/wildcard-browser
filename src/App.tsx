import { Forest } from '@mui/icons-material';
import {
  AppBar,
  CssBaseline,
  Drawer,
  IconButton,
  TablePagination,
  Toolbar,
  Typography,
} from '@mui/material';
import { useMemo, useState } from 'react';
import { WildcardList } from './WildcardList';
import { wildcardCollection } from './lib/wildcards';
import { FolderTree } from './components/FolderTree';
import { SearchBox } from './components/SearchBox';

const App = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(50);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [search, setSearch] = useState('');
  const wildcardsLocal = useMemo(
    () =>
      [...wildcardCollection].filter(
        (_, idx) => idx >= page * rowsPerPage && idx < (page + 1) * rowsPerPage,
      ),
    [page, rowsPerPage],
  );

  const handleChangePage = (
    _: React.MouseEvent<HTMLButtonElement> | null,
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

  const searchUpdate = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  return (
    <>
      <CssBaseline />
      <AppBar
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
        className="header text-center"
        position="relative">
        <Toolbar className="flex justify-between gap-4">
          <IconButton aria-label="" onClick={toggleTree}>
            <Forest />
          </IconButton>
          <Typography
            variant="h4"
            className="select-none text-4xl font-extrabold whitespace-nowrap flex-shrink-0">
            Wildcard Browser
          </Typography>
          <SearchBox onChange={searchUpdate} />
          <TablePagination
            className="flex-grow flex-shrink-0"
            component={'div'}
            count={wildcardCollection.length}
            page={page}
            onPageChange={handleChangePage}
            rowsPerPage={rowsPerPage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
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
        variant="temporary"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        ModalProps={{ keepMounted: true }}>
        <Toolbar />
        <h2 className="w-full text-center">🌳</h2>
        <FolderTree />
      </Drawer>
      <main className="overflow-y-auto">
        {wildcardsLocal.map((wildcards) => (
          <WildcardList
            search={search}
            key={wildcards.filepath}
            filename={wildcards.filename}
            entries={wildcards.wildcardEntries}
            wildcards={wildcards}
          />
        ))}
      </main>
    </>
  );
};

export default App;
