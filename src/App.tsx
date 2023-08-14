import { Forest, Settings } from '@mui/icons-material';
import {
  AppBar,
  CssBaseline,
  Drawer,
  IconButton,
  TablePagination,
  Toolbar,
  Typography,
} from '@mui/material';
import { useEffect, useState } from 'react';
import { WildcardList } from './WildcardList';
import { wildcardCollection } from './lib/wildcards';
import { FolderTreeDisplay } from './components/FolderTree';
import { SearchBox } from './components/SearchBox';
import {
  DEFAULT_SETTINGS,
  WildcardSettings,
  WildcardSettingsContext,
} from './lib/Settings';
import { SettingsDialog } from './SettingsDialog';
import {
  createSearchParams,
  useNavigate,
  useSearchParams,
} from 'react-router-dom';

function App() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const initialPage = Number(searchParams.get('page') ?? 0);
  const initialPageSize = Number(searchParams.get('pageSize') ?? 50);

  const [page, setPage] = useState(initialPage);
  const [rowsPerPage, setRowsPerPage] = useState(initialPageSize);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [search, setSearch] = useState('');
  const [settings, updateSettings] =
    useState<WildcardSettings>(DEFAULT_SETTINGS);
  const [settingsOpen, openSettings] = useState(false);

  const filteredWildcards = [...wildcardCollection].filter(
    (wildcards) =>
      !search ||
      wildcards.filepath.toLowerCase().includes(search.toLowerCase()),
  );

  const wildcardsLocal = filteredWildcards.filter(
    (_, idx) => idx >= page * rowsPerPage && idx < (page + 1) * rowsPerPage,
  );
  useEffect(() => {
    navigate({
      search: `?${createSearchParams({
        page: `${page}`,
        pageSize: `${rowsPerPage}`,
      })}`,
    });
  }, [page, rowsPerPage, navigate]);

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

  const handleSettingsClick = () => {
    openSettings(true);
  };

  const closeSettings = () => {
    openSettings(false);
  };

  return (
    <>
      <CssBaseline />
      <WildcardSettingsContext.Provider value={settings}>
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
              count={filteredWildcards.length}
              page={page}
              onPageChange={handleChangePage}
              rowsPerPage={rowsPerPage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
            <IconButton onClick={handleSettingsClick}>
              <Settings />
            </IconButton>
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
          <FolderTreeDisplay />
        </Drawer>
        <main className="overflow-y-auto">
          {wildcardsLocal.map((wildcards) => (
            <WildcardList
              search={search}
              key={wildcards.filepath}
              wildcards={wildcards}
            />
          ))}
        </main>
        <SettingsDialog
          open={settingsOpen}
          onClose={closeSettings}
          settings={settings}
          updateSettings={updateSettings}
        />
      </WildcardSettingsContext.Provider>
    </>
  );
}

export default App;
