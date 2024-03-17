import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export const MyRoutes = {
    login: "auth/login",
    register: "users",
    cities: "cities",
    alerts: "alerts",
}

@Injectable({
    providedIn: 'root'
})
export class HttpService {
    constructor(private http: HttpClient) { }
    baseUrl = "http://localhost:3000/";

    get<T>(path: string): Observable<T> {
        return this.http.get<T>(this.baseUrl + path)
    }

    post<T>(path: string, body: Object): Observable<T> {
        return this.http.post<T>(this.baseUrl + path, body)
    }

}
