import { Search } from '@mui/icons-material';
import { OutlinedInput } from '@mui/material';

interface SearchProps {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
export function SearchBox({ onChange }: SearchProps) {
  return (
    <OutlinedInput
      size="small"
      fullWidth
      onChange={onChange}
      endAdornment={<Search />}
    />
  );
}
