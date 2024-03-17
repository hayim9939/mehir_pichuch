import { Component } from '@angular/core';
import { HttpService } from '../../_services/http.services';
import { RegisterUser, User } from '../../typing';
import { Message, MessageService } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  user: RegisterUser = {
    username: "",
    password: "",
    email: "",
  };
  constructor(private http: HttpService, private messageService: MessageService, private router: Router) { }

  registerUser() {
    if (!this.user.username || !this.user.password || !this.user.email) {
      alert("please enter username  password");
      return;
    }
    this.http.post<RegisterUser>("users", this.user).subscribe(data => {
      this.messageService.add({ severity: 'success', summary: 'Success', detail: JSON.stringify(data) });
      this.router.navigate([""]);
    })

  }
}
