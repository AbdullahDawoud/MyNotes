import React from "react";
import { INote as INote } from "./models/INote";
import { NoteColorEnum } from "./types/NoteColorEnum";


export const NotesContext = React.createContext<NoteContextType | null>(null);


const NoteContextProvider: React.FC<Props> = ({ children }) => {
    const [notes, setNotes] = React.useState<INote[]>(defaultNotes);

    const addNote = (note: INote) => {
        setNotes([...notes, note])
    }

    const updateNote = (note: INote) => {
        const newNotesList = [...notes];
        
        const updatedNote = newNotesList.find(n=>n.id == note.id);
        if(!updatedNote)
            return;
        
        //map
        updatedNote.color = note.color;
        updatedNote.title = note.title;
        updatedNote.text = note.text;

        setNotes(newNotesList);
    }

    const removeNote = (id: number) => {
        const newNotesList = [...notes];
        newNotesList.splice(newNotesList.findIndex(n => n.id == id), 1)
        setNotes(newNotesList);
    }

    return (
        <NotesContext.Provider value={{ notes, addNote: addNote, updateNote, removeNote }}>
            {children}
        </NotesContext.Provider>
    );
};

export default NoteContextProvider;

const defaultNotes: INote[] = [
    { id: 1, title: 'First Note', text: 'this is my first note!', dateCreated: new Date(), color: NoteColorEnum.white },
    { id: 2, title: 'Second Note', text: 'this is my second note!', dateCreated: new Date(), color: NoteColorEnum.white },
]
export type NoteContextType = { 
    notes: INote[];
    addNote: (note: INote) => void;
    updateNote: (note: INote) => void;
    removeNote: (id: number) => void;
};

interface Props {
    children: React.ReactNode;
}

