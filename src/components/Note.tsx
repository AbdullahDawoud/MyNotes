import './Note.scss'
import moment from 'moment';
import { ChangeEvent, useContext, useState } from 'react';
import { INote } from '../models/INote';
import { NoteContextType, NotesContext } from '../NotesContext';
import { NoteColorEnum } from '../types/NoteColorEnum';

const notesPlaceholder = "Type your notes here...";
const titlePlaceholder = "Title...";

export interface NoteProps {
  defaultNote: INote
}

export const Note = ({ defaultNote }: NoteProps) => {

  const [note, setNote] = useState<INote>(defaultNote);
  const { notes, addNote, updateNote, removeNote } = useContext(NotesContext) as NoteContextType;

  const setNoteColor = (newColor: NoteColorEnum) => {
    let newNote = { ...note, color: newColor };
    setNote(newNote)

    updateNote(newNote);
  }

  const OnNoteTextChanged = (e: ChangeEvent<HTMLTextAreaElement>) => {
    let newNote = { ...note, text: e.target.value };
    setNote(newNote);

    updateNote(newNote);
  }

  const OnNoteTitleChanged = (e: ChangeEvent<HTMLInputElement>) => {
    let newNote = { ...note, title: e.target.value };
    setNote(newNote);

    updateNote(newNote);
  }

  return (
    <div className={'note ' + note.color}>

      <header>
        <div className="note-title">
          <input type="text" defaultValue={note.title} placeholder={titlePlaceholder} onChange={OnNoteTitleChanged} />
        </div>
        <button className='btn btn-icon-only' onClick={() => removeNote(note.id)}><i className="las la-times"></i></button>
      </header>

      <textarea className="note-text" onChange={OnNoteTextChanged} placeholder={notesPlaceholder}>
        {note.text}
      </textarea>

      <div className="note-footer">
        <div>Added {moment(note.dateCreated).format('D MMM y')}</div>

        {/* colors */}
        <div className='colors-bar'>
          {Object.values(NoteColorEnum).map(d => (
            <div
              className={d + (note.color == d ? 'active' : '')}
              onClick={() => { setNoteColor(d); }}></div>
          ))}
        </div>
      </div>

    </div>
  );
}
