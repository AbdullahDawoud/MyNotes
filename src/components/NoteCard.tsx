import './NoteCard.scss'
import moment from 'moment';
import { ChangeEvent, useState } from 'react';
import { Note } from '../models/Note';
import { NoteCardProps } from '../types/NoteCardProps';



const notesPlaceholder = "Type your notes here...";
const titlePlaceholder = "Title...";
export function NoteCard(props: NoteCardProps) {
const [color, setColor] = useState<string>(props.note.color);
const [note, setNote] = useState<Note>(props.note);  

  function setNoteColor(newColor: string) {
    setColor(newColor);
    note.color = newColor;
    setNote(note)
    props.onChange();
  }
  function GetClassName(){
    let className = 'note ';
    switch (color) {
      case 'R': return className + 'red';
      case 'G': return className + 'green';
      case 'B': return className + 'blue';
    }
    return className;
  }
  function OnNoteTextChanged(e: ChangeEvent<HTMLTextAreaElement>){
    const changedText = e.target.value;
    note.text = changedText;
    setNote(note);
    props.onChange();
  }
  
  function OnNoteTitleChanged(e: ChangeEvent<HTMLInputElement>){
    const changedText = e.target.value;
    note.title = changedText;
    setNote(note);
    props.onChange(); 
  }
  return (
    <div className={GetClassName()}>

      <header>
        <div className="note-title">
          <input type="text" defaultValue={note.title} placeholder={titlePlaceholder} onChange={OnNoteTitleChanged} />
        </div>
        <button className='btn btn-icon-only' onClick={props.onRemove}><i className="las la-times"></i></button>
      </header>

      <textarea className="note-text"  onChange={OnNoteTextChanged} placeholder={notesPlaceholder}>
        {note.text}
      </textarea>

      <div className="note-footer">
        <div>Added {moment(note.dateCreated).format('D MMM y')}</div>
        <div className='colors-bar'>
          <div className={'red ' + (color == 'R' ? 'active' : '')} onClick={()=> {setNoteColor('R');}} ></div>
          <div className={'green ' + (color == 'G' ? 'active' : '')} onClick={()=> {setNoteColor('G');}} ></div>
          <div className={'blue ' + (color == 'B' ? 'active' : '')} onClick={()=> {setNoteColor('B');}} ></div>
          <div className={'white ' + (color == 'W' ? 'active' : '')} onClick={()=> {setNoteColor('W');}} ></div>
        </div>
      </div>

    </div>
  );
}
