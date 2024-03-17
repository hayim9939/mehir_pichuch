import { Routes } from '@angular/router';
import { LoginComponent } from './login/loginScreen/login.component';
import { MainComponent } from './main/main.component';
import { RegisterComponent } from './login/registerScreen/register.component';

export const routes: Routes = [
    { path: '', component: LoginComponent, pathMatch: 'full' },
    { path: 'register', component: RegisterComponent, pathMatch: 'full' },
    { path: 'main', component: MainComponent, pathMatch: 'full' },
    { path: '**', redirectTo: '/', pathMatch: 'full' },
];
