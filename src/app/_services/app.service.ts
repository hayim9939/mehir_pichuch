import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  isSideBarOpen: Boolean = false;
  constructor() { }
}
