import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/user/user';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  @Input() user: User;

}
