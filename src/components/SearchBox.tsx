/* eslint-disable no-unused-vars */
import { ChangeEvent, useState } from 'react';
import './SearchBox.scss';

interface SearchBoxProps {
  onSearchTextChanged: (searchText: string) => void;
}

export const SearchBox = ({ onSearchTextChanged }: SearchBoxProps) => {
  const [searchValue, setSearchValue] = useState<string>('');

  const clearSearch = () => {
    setSearchValue('');

    onSearchTextChanged('');
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);

    onSearchTextChanged(e.target.value);
  };

  return (
    <div className="search">
      <input type="text" value={searchValue} onChange={onChange} placeholder="Search..." />
      {!searchValue && <i className="las la-search"></i>}
      {searchValue && <i className="las la-times pointer" title="clear" onClick={clearSearch}></i>}
    </div>
  );
};
