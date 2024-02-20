import { Injectable } from '@angular/core';
import { latLng } from 'leaflet';

@Injectable({
  providedIn: 'root',
})
export class MapService {
  controls = {
    zoom: 5,
    center: latLng(31.8918407, 34.8166226, 17.87),
  };
  updateZoom(x: number) {
    this.controls.zoom = x;
  }
  updateCenter(x: number, y: number) {
    this.controls.center = latLng(x, y);
  }
}
