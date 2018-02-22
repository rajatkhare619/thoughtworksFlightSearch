import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {NgForm} from '@angular/forms';
import {FlightService} from "../flight.service";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
@Output() search: EventEmitter<any> = new EventEmitter();
  constructor(private flightService: FlightService) { }

  ngOnInit() {
  }

  onSearch(form: NgForm) {
    this.flightService.setSearchData(form.value);
    this.search.emit(form);
  }
}
