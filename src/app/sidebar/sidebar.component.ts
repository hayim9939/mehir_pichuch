import { Component } from '@angular/core';
import { MapService } from '../_services/map.service';
import cities from '../_services/cities';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  controls = this.mapService.controls;
  constructor(private mapService: MapService) { }

  increaseZoom() {
    this.mapService.updateZoom(this.controls.zoom + 1)
  }

  decreaseZoom() {
    this.mapService.updateZoom(this.controls.zoom - 1)

  }
  updateCenter(x: number, y: number) {
    this.mapService.updateCenter(x, y);
  }
  flyToCity(city: keyof typeof cities) {
    this.mapService.flyToCity(city);
  }
}
