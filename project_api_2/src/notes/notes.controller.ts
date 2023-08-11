import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { NotesService } from './notes.service';
import { Note } from './schemas/note.schema';


@Controller('notes')
export class NotesController {
  constructor(private readonly notesService: NotesService) {}

  @Get()
  async getAllNotes(): Promise<Note[]> {
    return this.notesService.getAllNotes();
  }

  @Post()
  async createNote(@Body() note: Note): Promise<Note> {
    return this.notesService.createNote(note);
  }
}