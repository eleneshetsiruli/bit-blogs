export interface SearchValuesType {
  search: string;
}

export interface SearchFieldProps {
  searchValue: string;
  onSearchChange: (value: string) => void;
}
