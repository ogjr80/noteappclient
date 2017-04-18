
import { Injectable } from '@angular/core';
import {Http} from '@angular/http'; 
import "rxjs/add/operator/map";
import {Observable} from 'rxjs/Observable';

import { NoteItem } from './NoteItem';

@Injectable()
export class NoteServiceService {

  public ApiServer: string = "http://localhost:5000/";
  public ApiUrl : string = "api/notes"; 
  public ApiServerWithUrl: string = this.ApiServer + this.ApiUrl;  

  constructor( private _http: Http) { 

  }

  public getAll = (): Observable<NoteItem[]> => {
    return this._http.get(this.ApiServerWithUrl)
               .map(data => data.json()); 
  }


}
