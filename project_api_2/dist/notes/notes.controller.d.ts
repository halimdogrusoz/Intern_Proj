import { NotesService } from './notes.service';
import { Note } from './schemas/note.schema';
export declare class NotesController {
    private readonly notesService;
    constructor(notesService: NotesService);
    getAllNotes(): Promise<Note[]>;
    createNote(note: Note): Promise<Note>;
}
