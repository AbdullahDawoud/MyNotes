import React, { useReducer } from "react";
import notesReducer from "./NotesReducer";
import { INote } from "./types/INote";
import { NoteColorEnum } from "./types/NoteColorEnum";
import { NotesReducerActionTypeEnum } from "./types/NotesReducerActionEnum";

export const NotesContext = React.createContext<NoteContextType|null>(null);

const NoteContextProvider: React.FC<Props> = ({ children }) => {
  const [notes, dispatch] = useReducer(notesReducer, defaultNotes);
  // const [notes, setNotes] = React.useState<INote[]>(defaultNotes);

  const addNote = (note: INote) => {
    dispatch({ type: NotesReducerActionTypeEnum.AddNote, payload: note });

    return true;
  };

  const updateNote = (note: INote) => {
    dispatch({ type: NotesReducerActionTypeEnum.UpdateNote, payload: note });
  };

  const removeNote = (note: INote) => {
    dispatch({ type: NotesReducerActionTypeEnum.RemoveNote, payload: note });
  };

  return (
    <NotesContext.Provider value={{ notes, addNote: addNote, updateNote, removeNote }}>
    {children}
    </NotesContext.Provider>
  );
};

export default NoteContextProvider;

const defaultNotes: INote[] = [
  {
    id: 1,
    title: "First Note",
    text: "this is my first note!",
    dateCreated: new Date(),
    color: NoteColorEnum.white,
  },
  {
    id: 2,
    title: "Second Note",
    text: "this is my second note!",
    dateCreated: new Date(),
    color: NoteColorEnum.white,
  },
];
export type NoteContextType = {
  notes: INote[];
  addNote: (note: INote) => boolean;
  updateNote: (note: INote) => void;
  removeNote: (note: INote) => void;
};

interface Props {
  children: React.ReactNode;
}
