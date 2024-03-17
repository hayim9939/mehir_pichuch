import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './loginScreen/login.component';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './registerScreen/register.component';

import { MessagesModule } from 'primeng/messages';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

@NgModule({
  declarations: [LoginComponent, RegisterComponent],
  imports: [
    CommonModule, RouterLink, FormsModule, ToastModule, MessagesModule
  ],
  providers: [MessageService]
})
export class LoginModule { }
