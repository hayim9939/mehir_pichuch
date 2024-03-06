import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { MapComponent } from './map/map.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { FormsModule } from '@angular/forms';
import { routes } from './app.routes';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import { LoginModule } from './login/login.module';

@NgModule({
  declarations: [AppComponent, MapComponent, SidebarComponent, MainComponent],
  imports: [
    CommonModule, RouterOutlet, BrowserModule, LeafletModule, FormsModule, RouterModule.forRoot(routes),LoginModule
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
