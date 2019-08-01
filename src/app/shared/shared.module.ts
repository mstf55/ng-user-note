import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShortifyString } from './shortify-pipe';



@NgModule({
  declarations:[ShortifyString],
  exports:[ShortifyString],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
