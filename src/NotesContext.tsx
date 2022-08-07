/* eslint-disable no-unused-vars */
import React, { useReducer } from 'react';
import notesReducer from './NotesReducer';
import { INote } from './types/INote';
import { NoteColorEnum } from './types/NoteColorEnum';
import { NotesReducerAction } from './types/NotesReducerAction';

export type NoteContextType = {
  notes: INote[];
  dispatch: (value: NotesReducerAction) => void;
};

export const NotesContext = React.createContext<NoteContextType | null>(null);

const NoteContextProvider: React.FC<Props> = ({ children }) => {
  const [notes, dispatch] = useReducer(notesReducer, defaultNotes);

  return <NotesContext.Provider value={{ notes, dispatch }}>{children}</NotesContext.Provider>;
};

export default NoteContextProvider;

const defaultNotes: INote[] = [
  {
    id: 1,
    title: 'First Note',
    text: 'this is my first note!',
    dateCreated: new Date(),
    color: NoteColorEnum.white
  },
  {
    id: 2,
    title: 'Second Note',
    text: 'this is my second note!',
    dateCreated: new Date(),
    color: NoteColorEnum.white
  }
];

interface Props {
  children: React.ReactNode;
}
