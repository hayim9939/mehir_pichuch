import { Injectable } from '@angular/core';
import { HttpService, MyRoutes } from './http.services';
import { RegisterUser, User } from '../typing';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class LoginService {
    constructor(private http: HttpService, private router: Router) { }

    registerUser(user: RegisterUser) {
        this.http.post(MyRoutes.register, user).subscribe(response => {
            console.log('Registration successful:', response);
        });
    }
    login(user: User) {
        this.http.post<{ access_token: string }>(MyRoutes.login, user).subscribe(response => {
            console.log('Login successful:', response);
            localStorage.setItem("userToken", response.access_token)
            this.router.navigate(['/main']);
        });
    }

}
