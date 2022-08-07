import { INote } from './INote';
import { NotesReducerActionTypeEnum } from './NotesReducerActionEnum';

export interface NotesReducerAction {
  type: NotesReducerActionTypeEnum;
  payload: INote;
}
