import { Model } from 'mongoose';
import { Note } from './schemas/note.schema';
export declare class NotesService {
    private readonly noteModel;
    constructor(noteModel: Model<Note>);
    getAllNotes(): Promise<Note[]>;
    createNote(note: Note): Promise<Note>;
}
