import { Note } from "../models/Note";

export type NoteCardProps = {
    note: Note,
    onRemove: () => void,
    onChange: () => void,
}
 