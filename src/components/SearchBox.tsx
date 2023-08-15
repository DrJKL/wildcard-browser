import { Close, Search } from '@mui/icons-material';
import { InputAdornment, OutlinedInput } from '@mui/material';

interface SearchProps {
  searchQuery: string;
  setSearchQuery: (value: string) => void;
}
export function SearchBox({ searchQuery, setSearchQuery }: SearchProps) {
  const endAdornment = searchQuery ? (
    <InputAdornment position="end" className="cursor-pointer">
      <Close onClick={() => setSearchQuery('')} />
    </InputAdornment>
  ) : (
    <InputAdornment position="end" className="cursor-default">
      <Search />
    </InputAdornment>
  );

  return (
    <OutlinedInput
      size="small"
      value={searchQuery}
      fullWidth
      onChange={(event) => setSearchQuery(event.target.value)}
      endAdornment={endAdornment}
    />
  );
}
