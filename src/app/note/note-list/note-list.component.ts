import { Component, OnInit } from '@angular/core';
import { NoteService } from '../../core/services/note.service';
import { Observable } from 'rxjs';
import {Note} from '../note';

@Component({
  selector: 'notes-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.css']
})
export class NoteListComponent implements OnInit {

  notes: Observable<Note[]>;
  content: string;

  constructor(private notesService: NoteService) { }

  ngOnInit() {
    this.notes = this.notesService.getData();
  }
  
  createNote() {
    this.notesService.createNote(this.content);
    this.content = "";
  }

  trackById(note: Note){
    return note && note.id; 
 }

}
