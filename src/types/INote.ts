import { NoteColorEnum } from "./NoteColorEnum";

export type INote = {
    id: number;
    dateCreated: Date;
    title: string;
    text: string;
    color: NoteColorEnum;
}

