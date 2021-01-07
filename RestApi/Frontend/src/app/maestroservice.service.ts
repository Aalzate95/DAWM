import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MaestroserviceService {

  constructor(private http: HttpClient) { }

  getMaestros(): Observable<any> {
    //return of(MAESTRO_DATA);
    return this.http.get("http://localhost:3000/maestro");
  }
}
