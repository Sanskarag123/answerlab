import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http'
import {Subject} from 'rxjs'
import { from } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class BackendService {
  private url1="https://serverwork.herokuapp.com/api/contri";
  private url2="https://serverwork.herokuapp.com/api/code";
  private url3="https://serverwork.herokuapp.com/api/login";
  constructor(private http:HttpClient) { }
  submitentry(user)
  {
    return this.http.post<any>(this.url1,user);
  }
  codeback(rest)
  {
    return this.http.post<any>(this.url2,rest);
  }
  login(log)
  {
    return this.http.post<any>(this.url3,log);
  }
}
