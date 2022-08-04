import { INote } from "./types/INote";
import { NotesReducerAction } from "./types/NotesReducerAction";
import { NotesReducerActionTypeEnum } from "./types/NotesReducerActionEnum";

const notesReducer = (notes: INote[], action: NotesReducerAction) => {
  const { type, payload } = action;
  switch (type) {
    case NotesReducerActionTypeEnum.AddNote: 
      return [...notes, payload];
    
    case NotesReducerActionTypeEnum.UpdateNote: {
      const newNotesList = [...notes];

      const updatedNote = newNotesList.find((n) => n.id === payload.id);
      if (!updatedNote) return notes;

      //map
      updatedNote.color = payload.color;
      updatedNote.title = payload.title;
      updatedNote.text = payload.text;

      return newNotesList;
    }

    case NotesReducerActionTypeEnum.RemoveNote:
      return [...notes.filter((n) => n.id !== payload.id)];

    default:
      return notes;
  }
};

export default notesReducer;
