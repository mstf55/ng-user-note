import { NgModule } from '@angular/core';
import { AuthService } from './auth.service';
import {NoteService} from './note.service';
import {NameTrackerService} from './name-tracker.service';



@NgModule({
  providers: [AuthService,NoteService,NameTrackerService],
  declarations:[],
  exports:[]
})
export class CoreModule { }