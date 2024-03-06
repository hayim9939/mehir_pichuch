import { Component } from '@angular/core';
import { Map, circle, latLng, polygon, tileLayer } from 'leaflet';
import { MapService } from '../_services/map.service';
import { HeatmapService } from '../_services/heatmap.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrl: './map.component.scss'
})
export class MapComponent {

  controls = this.mapService.controls;
  layersControl = this.mapService.layersControl;
  constructor(
    private mapService: MapService,
    private heatmapService: HeatmapService
  ) { }

  options = {
    layers: [
      tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", { maxZoom: 18 }),
      this.heatmapService.heatmapLayer
    ],
    zoom: 15,
    center: latLng(31.8918407, 34.8166226, 17.87)
  }



  onMapReady(map: Map) {
    this.mapService.onMapReady(map, this.heatmapService.heatmapLayer);

  }

}
