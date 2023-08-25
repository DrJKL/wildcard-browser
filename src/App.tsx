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
import { WildcardFile, wildcardCollection$ } from './lib/wildcards';
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

  const initialPage = () => Number(searchParams.get('page') ?? 0);
  const initialPageSize = () => Number(searchParams.get('pageSize') ?? 50);
  const initialSearch = (): string => searchParams.get('search') ?? '';

  const [page, setPage] = useState(initialPage);
  const [rowsPerPage, setRowsPerPage] = useState(initialPageSize);
  const [search, setSearch] = useState(initialSearch);

  const [drawerOpen, setDrawerOpen] = useState(false);
  const [settingsOpen, openSettings] = useState(false);

  const [settings, updateSettings] =
    useState<WildcardSettings>(DEFAULT_SETTINGS);

  const [wildcardCollection, setWildcardCollection] = useState<WildcardFile[]>(
    [],
  );
  useEffect(() => {
    const sub = wildcardCollection$.subscribe({
      next: (wildcardFiles) => {
        setWildcardCollection(wildcardFiles);
      },
    });
    return () => sub.unsubscribe();
  }, []);

  const filteredWildcards = wildcardCollection.filter(
    (wildcards) =>
      !search ||
      wildcards.filepath.toLowerCase().includes(search.toLowerCase()),
  );

  const maxPages = Math.floor(filteredWildcards.length / rowsPerPage);

  const wildcardsLocal = filteredWildcards.filter(
    (_, idx) => idx >= page * rowsPerPage && idx < (page + 1) * rowsPerPage,
  );

  useEffect(() => {
    if (page > maxPages) {
      setPage(maxPages);
    }
  }, [page, maxPages, search]);

  useEffect(() => {
    const params: Record<string, string> = {
      page: `${page}`,
      pageSize: `${rowsPerPage}`,
    };
    if (search) {
      params['search'] = search;
    }
    navigate({
      search: `?${createSearchParams(params)}`,
    });
  }, [page, rowsPerPage, navigate, maxPages, search]);

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

  const searchUpdate = (value: string) => {
    setSearch(value);
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
          <Toolbar className="flex justify-between gap-4 flex-wrap md:flex-nowrap">
            <IconButton aria-label="" onClick={toggleTree}>
              <Forest />
            </IconButton>
            <Typography
              variant="h4"
              className="select-none text-4xl font-extrabold whitespace-nowrap flex-shrink-0">
              Wildcard Browser
            </Typography>
            <SearchBox searchQuery={search} setSearchQuery={searchUpdate} />

            <TablePagination
              className="flex-grow flex-shrink-0"
              component={'div'}
              count={filteredWildcards.length}
              page={page}
              onPageChange={handleChangePage}
              rowsPerPage={rowsPerPage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              labelRowsPerPage={
                <span className="hidden md:inline">Rows per page</span>
              }
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
          <FolderTreeDisplay
            onLeafClick={(entry: WildcardFile) => {
              setSearch(entry.filepath);
              setDrawerOpen(false);
            }}
          />
        </Drawer>
        <main className="overflow-y-auto">
          {wildcardsLocal.map((wildcards) => (
            <WildcardList
              search={search}
              key={wildcards.filepath}
              wildcards={wildcards}
              open={wildcardsLocal.length === 1}
            />
          ))}
        </main>
        <footer className="flex-[1em]">...</footer>
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
