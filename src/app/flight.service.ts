import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class FlightService {
searchOptions: any;
  constructor(private http: Http) {}

  getData() {
    return this.http.get('./assets/flightData.json')
      .map((response: Response) => {
     return response.json();
    })
      .catch((error: Response) => Observable.throw(error.json()));
  }

  setSearchData(searchData) {
    this.searchOptions = searchData;
  }

  getSearchData() {
    return this.searchOptions;
  }
}
