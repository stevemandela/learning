import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataServiceService {


    constructor(/*public http: Http*/) {

    }
  getPerson(){
      /*return this.http.get('https://jsonplaceholder.typicode.com/users').map(res => res.json());*/
  }

}