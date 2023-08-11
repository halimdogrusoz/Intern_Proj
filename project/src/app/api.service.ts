import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Note } from './note.model';
import { Observable, of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class ApiService{
    notes: any = [];
    constructor(private http: HttpClient){ }

    createNote(noteData: Note){
        return this.http.post('http://localhost:3000/notes/', noteData);
    }

    getAllNotes(){
        return this.http.get('http://localhost:3000/notes');
    }

}
