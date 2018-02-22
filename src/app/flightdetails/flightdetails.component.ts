import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-flightdetails',
  templateUrl: './flightdetails.component.html',
  styleUrls: ['./flightdetails.component.css']
})
export class FlightdetailsComponent implements OnInit {
@Input() oneWayCode: string;
@Input() price: string;
@Input() from: string;
@Input() to: string;
@Input() depart: string;
@Input() arrive: string;
@Input() returnCode: string;
@Input() returnFrom: string;
@Input() returnTo: string;
@Input() returnDepart: string;
@Input() returnArrive: string;

  constructor() { }

  ngOnInit() {
  }

}
