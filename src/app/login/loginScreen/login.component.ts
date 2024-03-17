import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { User } from '../../typing';
import { LoginService } from '../../_services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  private _url_users: string = 'http://localhost:3000/users';
  user: User = {
    username: "",
    password: "",
  };
  constructor(private http: HttpClient, private loginService: LoginService) { }

  login() {
    this.loginService.login(this.user)
  }





}
