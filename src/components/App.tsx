import React, { useState } from 'react';
import './App.scss';
import Header from './Header';
import { SearchBox } from './SearchBox';
import NotesList from './NotesList';
import { Note } from './Note';

const App: React.FC = () => {
  const [searchText, setSearchText] = useState('');

  return (
    <>
      <Header>
        {/* <button className="btn btn-icon" onClick={addNewNote}>
          <i className="las la-plus"></i>
        </button> */}
        <SearchBox onSearchTextChanged={(t) => setSearchText(t)} />
      </Header>

      {searchText && (
        <div className="reasult-div">
          Results found for <i>{searchText}</i>:
        </div>
      )}
      {!searchText && <h3>Add new note:</h3>}
      <div className="flex">{!searchText && <Note displayNote={null} isNewEntity={true} />}</div>

      {!searchText && <h3>Notes:</h3>}
      <NotesList searchText={searchText} />
    </>
  );
};

export default App;
