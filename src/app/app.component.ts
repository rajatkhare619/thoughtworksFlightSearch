import { Component } from '@angular/core';
import {FlightService} from './flight.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  searchData: any;
  constructor(private flightService: FlightService) {}

  getData() {
    this.flightService.getData()
      .subscribe((data) => {
      // this.data = data;
      });
  }

  updateMain(formData) {
    this.searchData = formData;
  }
}
