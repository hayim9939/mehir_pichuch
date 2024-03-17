import { Component, OnInit } from '@angular/core';
import { MapService } from '../_services/map.service';
import cities from '../_services/cities';
import { SidebarService } from '../_services/sidebar.service';
import { City } from '../typing';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent implements OnInit {
  controls = this.mapService.controls;
  constructor(private mapService: MapService, public sidebarService: SidebarService) { }

  ngOnInit(): void {

  }

  increaseZoom() {
    this.mapService.updateZoom(this.controls.zoom + 1)
  }

  decreaseZoom() {
    this.mapService.updateZoom(this.controls.zoom - 1)

  }
  updateCenter(x: number, y: number) {
    this.mapService.updateCenter(x, y);
  }
  flyToCity(city: City) {
    this.mapService.flyToCity(city);
  }
}
