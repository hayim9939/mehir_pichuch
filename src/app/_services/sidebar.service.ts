import { Injectable } from '@angular/core';
import { HttpService, MyRoutes } from './http.services';
import { City } from '../typing';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  cities$: Observable<City[]> = this.httpService.get<City[]>(MyRoutes.cities);

  constructor(private httpService: HttpService) { }
}
