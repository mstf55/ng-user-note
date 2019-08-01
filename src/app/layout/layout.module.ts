import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';



@NgModule({
  declarations: [FooterComponent, HeaderComponent, NavbarComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    FooterComponent,HeaderComponent
  ]
})
export class LayoutModule { }
