import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { Observable } from 'rxjs';
import { User } from 'src/app/user/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  user:Observable<User>;

  constructor(private auth:AuthService) { 
    this.user=auth.user;
  }

  ngOnInit() {
  }

}
