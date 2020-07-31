import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  public getData<T>(api, q?: any): Observable<T> {
    return this.http.get<T>(api, { params: q });
  }
}
