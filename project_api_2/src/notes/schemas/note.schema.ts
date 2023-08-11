import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
export type NoteDocument = Note & Document<Note>;

//version keys off for single users
@Schema({ versionKey: false })
export class Note {
  @Prop()
  future: String

  @Prop()
  height: Number

  @Prop()
  weight: Number

  @Prop()
  date: Date

  @Prop()
  bmi: Number

}

export const NoteSchema = SchemaFactory.createForClass(Note);