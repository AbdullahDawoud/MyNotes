import './Note.scss';
import moment from 'moment';
import { ChangeEvent, useContext, useEffect, useState } from 'react';
import { INote } from '../types/INote';
import { NoteContextType, NotesContext } from '../NotesContext';
import { NoteColorEnum } from '../types/NoteColorEnum';
import { NotesReducerActionTypeEnum } from '../types/NotesReducerActionEnum';

const notesPlaceholder = 'Type your notes here...';
const titlePlaceholder = 'Title...';
const newEntityTitlePlaceholder = 'New Note...';
const textAreaRows = 3;

export interface NoteProps {
  displayNote: INote | null;
  isNewEntity: boolean;
}

export const Note = ({ displayNote, isNewEntity }: NoteProps) => {
  const [note, setNote] = useState<INote>(displayNote ?? { ...defaultNote });
  const [isDirty, setIsDirty] = useState(false);

  const { dispatch } = useContext(NotesContext) as NoteContextType;

  const setNoteColor = (newColor: NoteColorEnum) => {
    setNote({ ...note, color: newColor });
  };

  const handleInputChange = (e: ChangeEvent<any>) => {
    const value = e.target.value;
    const name = e.target.name;

    setNote({ ...note, [name]: value });
  };

  const onSubmit = (e: any) => {
    dispatch({
      type: isNewEntity
        ? NotesReducerActionTypeEnum.AddNote
        : NotesReducerActionTypeEnum.UpdateNote,
      payload: note
    });

    setIsDirty(false);

    if (isNewEntity) setNote({ ...defaultNote, id: Math.round(Math.random() * 9999) }); //  set new id

    e.preventDefault();
  };

  const removeNote = (note: INote) => {
    dispatch({ type: NotesReducerActionTypeEnum.RemoveNote, payload: note });
  };

  useEffect(() => {
    if (note === displayNote) return;

    setIsDirty(true);
  }, [displayNote, note]);

  return (
    <div className={`note new ${note.color}`}>
      <form onSubmit={onSubmit}>
        <header>
          <div className="note-title">
            <input
              type="text"
              name="title"
              defaultValue={note.title}
              value={note.title}
              placeholder={isNewEntity ? newEntityTitlePlaceholder : titlePlaceholder}
              onChange={handleInputChange}
            />
          </div>
          {!isNewEntity && (
            <button className="btn btn-icon-only" onClick={() => removeNote(note)}>
              <i className="las la-times"></i>
            </button>
          )}
        </header>

        <textarea
          name="text"
          value={note.text}
          className="note-text"
          onChange={handleInputChange}
          placeholder={notesPlaceholder}
          rows={textAreaRows}>
          {note.text}
        </textarea>

        <div className="note-footer">
          {!isNewEntity && (
            <div className="note-date-text">
              Added {moment(note.dateCreated).format('D MMM H:m a')}
            </div>
          )}

          <div className="colors-bar">
            {Object.values(NoteColorEnum).map((d) => (
              <div
                key={d}
                className={d + (note.color === d ? 'active' : '')}
                onClick={() => {
                  setNoteColor(d);
                }}></div>
            ))}
          </div>

          {isDirty && (
            <input
              className="btn btn-yellow"
              type="submit"
              value={isNewEntity ? 'Add' : 'Save'}
              disabled={note.title + note.text === ''}
            />
          )}
        </div>
      </form>
    </div>
  );
};

const defaultNote: INote = {
  color: NoteColorEnum.white,
  dateCreated: new Date(),
  title: '',
  text: '',
  id: Math.round(Math.random() * 9999)
};
