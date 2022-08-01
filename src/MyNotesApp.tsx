import { useEffect, useState } from 'react';
import './MyNotesApp.scss';
import Header from './components/Header';
import { SearchBox } from './components/SearchBox';
import { NoteCard } from './components/NoteCard';
import { Note } from './models/Note';


function MyNotesApp() {
  const [searchText, setSearchText] = useState<string>('');
  const [notes, setNotes] = useState<Note[]>([])

  useEffect(() => {
    const savedNotes: Note[] = GetNotesFromStorage();
    if (savedNotes.length > 0)   
      setNotes(orderNotes(savedNotes));  
    
  }, [])

  // useEffect(()=>{
  //   const orderedNotes = orderNotes(notes);    
  //     setNotes(orderedNotes);
  //     console.log('...sorted');      
  // }, [notes]);

  function orderNotes(savedNotes: Note[]) {
    return savedNotes.sort((a, b) => { return new Date(b.dateCreated).getTime() - new Date(a.dateCreated).getTime(); });
  }

  function AddNote() {
    const newNote = new Note();
    const updatedNotes = notes.concat(newNote);
    setNotes(updatedNotes); 

    SaveNotesToStorage(updatedNotes);
  }

  function RemoveNote(note: Note){
    const index = notes.findIndex(n => n === note);    
    notes.splice(index, 1);
    setNotes([...notes]);

    SaveNotesToStorage(notes);
  }
  
  function SaveNotesToStorage(notes:Note[]) {
    localStorage.setItem('notes', JSON.stringify(notes));
  }
  function GetNotesFromStorage() : Note[] {
    const savedNotesAsString = localStorage.getItem('notes');
    if (!savedNotesAsString)
      return [];
    const savedNotes: Note[] = JSON.parse(savedNotesAsString) || [];
    return savedNotes;
  }

  let filteredNotes = notes.filter(note=>(note.text+note.title).toLowerCase().includes(searchText.toLocaleLowerCase()));
  filteredNotes = orderNotes(filteredNotes);
  
  return (
    <>
      <Header>
        <button className='btn btn-icon' onClick={AddNote}><i className="las la-plus"></i></button>
        <SearchBox onSearchTextChanged={(t => setSearchText(t))} />
      </Header>


      {searchText && <div className='reasult-div'> {filteredNotes.length} results found for <i>'{searchText}'</i>:</div>}
      

      <div className='notes-wrapper'>
        {filteredNotes.map(note => (
          <NoteCard 
          key={note.id} 
          note={note} 
          onRemove={()=> RemoveNote(note)}
          onChange={()=> SaveNotesToStorage(notes)}></NoteCard>
        ))}
      </div>


    </>
  );
}

export default MyNotesApp;


