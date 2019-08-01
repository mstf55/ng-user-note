import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


import { AuthService } from '../core/services/auth.service';
import { UserService } from '../core/services/user.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { User } from '../user/user';

type UserFields = 'email' | 'password';
type FormErrors = { [u in UserFields]: string };

@Component({
  selector: 'user-form',
  templateUrl: './user-form.component.html',
})
export class UserFormComponent implements OnInit {
  user:Observable<User>;

  userForm: FormGroup;
  isLoginForm = true;
  formText = 'Create new account';
  buttonText = 'Login';
  formErrors: FormErrors = {
    'email': 'Email must be a valid email',
    'password': 'Password must be valid.',
  };

  constructor(private fb: FormBuilder, private auth: AuthService, private userService: UserService, private router: Router, private toastr: ToastrService) {
    this.user=auth.user;
   }

  ngOnInit() {
    this.buildForm();
  }

  changeViewForm() {
    this.isLoginForm = !this.isLoginForm;

    if (this.isLoginForm) {
      this.formText = 'Create new account';
      this.buttonText = 'Login';
    }
    else {
      this.formText = 'Already have one';
      this.buttonText = 'Signup';
    }


  }

  submit() {
    const email = this.userForm.value['email'];
    const password = this.userForm.value['password'];
    const username = this.userForm.value['username'];
    if (this.isLoginForm) {
      this.auth.login(email, password).then(credential => {
        this.saveAndChangeRoute(credential.user.uid);
      })
        .catch(error => this.toastr.error(error.message));
    }
    else {
      this.auth.signup(email, password, username).then(credential => {
        return this.userService.createUserInDb({ ...credential.user, userName: username }).then(act => {
          this.saveAndChangeRoute(credential.user.uid);
        });
      })
      .catch(error => this.toastr.error(error.message));

    }
  }

  buildForm() {
    this.userForm = this.fb.group({
      'email': ['', [
        Validators.required,
        Validators.email,
      ]],
      'username': ['', [
      ]],
      'password': ['', [
        Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$'),
        Validators.minLength(6),
        Validators.maxLength(25),
      ]],
    });

  }

  private saveAndChangeRoute(uuid: string) {
    this.toastr.success("Good to see u here");
    localStorage.setItem('userId', uuid);  //localstore test
    this.router.navigate(['/user']);  //its good use use router here components know where to go
  }
}