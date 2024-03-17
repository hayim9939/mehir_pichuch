import { Injectable } from '@angular/core';
import { Map, circle, latLng, polygon, tileLayer } from 'leaflet';
import cities from './cities';
import { City } from '../typing';

@Injectable({
  providedIn: 'root'
})
export class MapService {
  map: Map | null = null;

  layersControl = {
    baseLayers: {
      "openstreetmap": tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", { maxZoom: 18 }),
      "opencyclemap": tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", { maxZoom: 18 })
    },
    overlays: {
      "big circle": circle([32.07, 34.87], { radius: 100, color: "red" }),
      "square": polygon([[32.07, 34.87], [32.15, 34.87], [32.15, 34.53], [32.07, 34.53]])

    }
  }

  controls = {
    zoom: 5,
    center: latLng(31.8918407, 34.8166226, 17.87),
  }

  updateZoom(x: number) {
    this.controls.zoom = x;
  }

  updateCenter(x: number, y: number) {
    this.controls.center = latLng(x, y);
  }

  flyToCity(city: City) {
    this.map?.fitBounds([[+city.boundingBox[0], +city.boundingBox[1]], [+city.boundingBox[2], +city.boundingBox[3]]]);
  }
  // flyToCity(city: City) {
  //   this.map?.flyTo(latLng(+city.lat, +city.lng), 15)
  // }

  onMapReady(map: Map, layer: any) {
    this.map = map;
    console.log({ map });
    // map.on({
    //   mousemove: (e: any) => {
    //     layer.addLatLng(e.latlng)
    //   }
    // })

  }
}
function latLngTuple(arg0: number, arg1: number): import("leaflet").LatLngTuple {
  throw new Error('Function not implemented.');
}

