import { Component } from '@angular/core';
import { MapService } from '../_servies/map.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  controls = this.mapService.controls;

  constructor(private mapService: MapService) {}
updateCenter(x:number  , y:number){
this.mapService.updateCenter(x,y) ;
}

  increaseZoom() {
    this.mapService.updateZoom(this.controls.zoom + 1);
  }
  decreaseZoom() {
    this.mapService.updateZoom(this.controls.zoom - 1);
  }
}
