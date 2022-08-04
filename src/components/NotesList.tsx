import { useContext, useEffect, useState } from "react";
import { NoteContextType, NotesContext } from "../NotesContext";
import { Note } from "./Note";

interface Props {
  searchText: string;
}

const NotesList = ({ searchText }: Props) => {
  const { notes } = useContext(NotesContext) as NoteContextType;
  const [filteredNotes, setFilteredNotes] = useState(notes);

  useEffect(() => {
    const searchResults = notes.filter((n) =>
      (n.title + n.text)
        .toLocaleLowerCase()
        .includes(searchText.toLocaleLowerCase())
    );
    setFilteredNotes(searchResults);
  }, [searchText, notes]);

  return (
    <div className="notes-wrapper">
      {filteredNotes.map((note) => (
        <Note key={note.id} displayNote={note} isNewEntity={false}></Note>
      ))}
    </div>
  );
};

export default NotesList;
