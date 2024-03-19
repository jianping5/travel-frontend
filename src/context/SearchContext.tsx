import { createContext } from 'react';

const SearchContext = createContext({
  searchText: '',
  onSearch: (val: string) => {},
});
export default SearchContext;