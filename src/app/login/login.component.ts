import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  private _url: string = 'http://localhost:3000/users';
  user = {
    username: '',
    password: '',
    // email: '',
  };
  constructor(private http: HttpClient) {}

  registerUser() {
    this.http.post(this._url, this.user).subscribe(
      (response) => {
        console.log('Registration successful:', response);
        // Handle the success response here, if needed
      },
      (error) => {
        console.error('Registration failed:', error);
        // Handle the error here
      }
    );
  }
}
