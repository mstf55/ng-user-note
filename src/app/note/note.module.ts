import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NoteListComponent } from './note-list/note-list.component';
import { NoteDetailComponent } from './note-detail/note-detail.component';
import {ShortifyString} from '../core/shortify-pipe';


@NgModule({
  imports: [
    CommonModule,
    FormsModule  ],
  declarations: [NoteListComponent, NoteDetailComponent,ShortifyString],
  providers: []
})
export class NotesModule { }
