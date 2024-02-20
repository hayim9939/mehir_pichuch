import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MapComponent } from './map/map.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [MapComponent, SidebarComponent, AppComponent],
  imports: [CommonModule, RouterOutlet , BrowserModule ,LeafletModule , FormsModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
