import { useMemo, useState } from 'react';
import { WildcardList } from './WildcardList';
import { wildcardCollection } from './lib/wildcards';
import { Button, Pagination, TablePagination } from '@mui/material';

const App = () => {
  const maxPage = Math.floor(wildcardCollection.length / 50);

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(50);
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

  return (
    <>
      <header className="header text-center">
        <h1 className="text-4xl font-extrabold">Wildcard Browser</h1>
        <TablePagination
          className="w-full"
          component={'div'}
          count={wildcardCollection.length}
          page={page}
          onPageChange={handleChangePage}
          rowsPerPage={rowsPerPage}
          onRowsPerPageChange={handleChangeRowsPerPage}></TablePagination>
      </header>

      <main className="overflow-y-auto">
        {wildcardsLocal.map((wildcards) => (
          <WildcardList
            key={wildcards.filepath}
            filename={wildcards.filename}
            entries={wildcards.wildcardEntries}></WildcardList>
        ))}
      </main>
    </>
  );
};

export default App;
