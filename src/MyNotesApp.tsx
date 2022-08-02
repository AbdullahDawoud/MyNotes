import React, { useContext, useEffect, useState } from 'react';
import './MyNotesApp.scss';
import Header from './components/Header';
import { SearchBox } from './components/SearchBox';
import { Note } from './components/Note';
import { INote } from './models/INote';
import NotesList from './components/NotesList';
import { NoteContextType, NotesContext } from './NotesContext';
import { NoteColorEnum } from './types/NoteColorEnum';




function MyNotesApp() {
  const [searchText, setSearchText] = useState<string>('');
  const { notes, addNote,updateNote } = useContext(NotesContext) as NoteContextType;


  const addNewNote = () => {
    
    const newNote: INote = {
      id: Math.round(Math.random() * 100),
      dateCreated: new Date,
      title: '',
      text: '',
      color: NoteColorEnum.green
    };
    
    addNote(newNote);
  }

  return (
    <>
      <Header>
        <button className='btn btn-icon' onClick={addNewNote}><i className="las la-plus"></i></button>
        <SearchBox onSearchTextChanged={(t => setSearchText(t))} />
      </Header>


      {searchText && <div className='reasult-div'> Results found for <i>'{searchText}'</i>:</div>}


      <NotesList searchText={searchText} />
</>
  );
}

export default MyNotesApp;

