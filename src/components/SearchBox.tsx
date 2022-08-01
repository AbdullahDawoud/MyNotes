import { ChangeEvent, useState } from "react";
import { SearchBoxProps } from "../types/SearchBoxProps";
import './SearchBox.scss'

export function SearchBox(props: SearchBoxProps) {
    const [searchValue, setSearchValue] = useState<string>('');
    function clearSearch() {
        setSearchValue('');
        props.onSearchTextChanged(''); 
    } 
    function onChange(e: ChangeEvent<HTMLInputElement>) {
        const value = e.target.value;
        setSearchValue(value);
        props.onSearchTextChanged(value);
    }
    return (
        <div className="search">
            <input type="text" value={searchValue} onChange={onChange} placeholder="Search..." />
            {!searchValue && <i className="las la-search"></i>}
            {searchValue && <i className="las la-times pointer" title="clear" onClick={clearSearch}></i>}
        </div>
    );
}
