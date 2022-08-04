import { useContext, useReducer, useState } from "react";
import "./App.scss";
import Header from "./Header";
import { SearchBox } from "./SearchBox";
import { INote } from "../types/INote";
import NotesList from "./NotesList";
import { NoteContextType, NotesContext } from "../NotesContext";
import { NoteColorEnum } from "../types/NoteColorEnum";
import notesReducer from "../NotesReducer";
import { NotesReducerActionTypeEnum } from "../types/NotesReducerActionEnum";
import { Note } from "./Note";

const App: React.FC = () => {
  const [, dispatch] = useReducer(notesReducer, []);

  const [searchText, setSearchText] = useState("");
  const [showError, setShowError] = useState(false);
  const { addNote } = useContext(NotesContext) as NoteContextType;

  const addNewNote = () => {
    const newNote: INote = {
      id: Math.round(Math.random() * 100),
      dateCreated: new Date(),
      title: "",
      text: "",
      color: NoteColorEnum.green,
    };

    dispatch({ type: NotesReducerActionTypeEnum.AddNote, payload: newNote });

    const isAdded = addNote(newNote);
    setShowError(!isAdded);
  };

  return (
    <>
      <Header>
        {showError && <div className="error-label">Fill the empty note!</div>}
        <button className="btn btn-icon" onClick={addNewNote}>
          <i className="las la-plus"></i>
        </button>
        <SearchBox onSearchTextChanged={(t) => setSearchText(t)} />
      </Header>


      {searchText && (
        <div className="reasult-div">
          Results found for <i>'{searchText}'</i>:
        </div>
      )}

      {!searchText && <h3>Add new note:</h3>}
      {!searchText && <Note displayNote={null} isNewEntity={true} />}

      {!searchText && <h3>Notes:</h3>}
      <NotesList searchText={searchText} />
    </>
  );
};

export default App;
