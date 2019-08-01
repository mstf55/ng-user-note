import { NgModule } from '@angular/core';
import { AuthService } from './services/auth.service';
import {NoteService} from './services/note.service';
import {NameTrackerService} from './services/name-tracker.service';



@NgModule({
  providers: [AuthService,NoteService,NameTrackerService],
  declarations:[],
  exports:[]
})
export class CoreModule { }