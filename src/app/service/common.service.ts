import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Observable } from 'rxjs';
import * as constants from './../../environments/constants';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private httpService: HttpService) { }

  public getUser<T>(): Observable<T> {
    return this.httpService.getData(constants.USERLIST);
  }

}
