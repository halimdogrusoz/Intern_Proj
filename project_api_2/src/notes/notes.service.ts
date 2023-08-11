import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Note } from './schemas/note.schema';

@Injectable()
export class NotesService {
  constructor(@InjectModel('Note') private readonly noteModel: Model<Note>) {}

  async getAllNotes(): Promise<Note[]> {
    return this.noteModel.find().exec();
  }

  async createNote(note: Note): Promise<Note> {
    const newNote = new this.noteModel(note);
    return newNote.save();
  }
}
