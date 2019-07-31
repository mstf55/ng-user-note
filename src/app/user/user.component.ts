import { Component } from '@angular/core';
import { AuthService } from '../core/auth.service';
import { Observable } from 'rxjs';
import { User } from './user';
import { UserService } from '../core/user.service';
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  user: Observable<User>;

  constructor(private auth: AuthService, private userService: UserService,private toastr: ToastrService) {
    this.user = auth.user;
  }

  logout() {
    this.auth.logOut();
  }

  changeUserName(event) {
    const newName = event.target.value;
    const uid = localStorage.getItem("userId")
    this.userService.updateUserName(uid, newName).then(() => {
      this.toastr.success("User name has changed");
    }).catch(error => alert(error.message));;
  }

}
