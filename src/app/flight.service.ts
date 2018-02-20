import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class FlightService {
flightData: any = [];

  constructor(private http: Http) {}

  getData() {
    return this.http.get('./assets/flightData.json')
      .map((response: Response) => {
     return response.json();
    });
  }
}
