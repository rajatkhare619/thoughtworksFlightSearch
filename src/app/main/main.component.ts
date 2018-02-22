import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {FlightService} from '../flight.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit, OnChanges {
@Input() formData: any;
flights: any = [];
flightList: any = [];
  constructor(private flightService: FlightService) { }

  ngOnInit() {
this.flightService.getData()
  .subscribe((data) => {
    this.flights = data;
    console.log(this.flights);
  });
  }
   ngOnChanges() {
    if (this.formData) {
      let day = new Date(this.formData.value.date).toString().substring(0, 3);
      let origin = this.formData.value.origin;
      let destination = this.formData.value.destination;
      let passengers = this.formData.value.passengers;
      this.getFlights({day, origin, destination, passengers});

    }
   }

   getFlights(formData) {

    this.flightList = this.flights.filter((flight) => {
      console.log(formData.day);
      console.log(flight.depart.substring(0, 3));
       return (formData.day.toUpperCase() === flight.depart.substring(0, 3)) && (formData.origin === flight.from && formData.destination === flight.to);
    });
    console.log(this.flightList);
   }

}
