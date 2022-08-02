import { NoteColorEnum } from "../types/NoteColorEnum";

export type INote = {
    id: number;
    dateCreated: Date;
    title: string;
    text: string;
    color: NoteColorEnum;
}

