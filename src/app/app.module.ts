import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {FlightService} from './flight.service';
import {HttpModule} from '@angular/http';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MainComponent } from './main/main.component';
import { FlightdetailsDirective } from './flightdetails.directive';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    MainComponent,
    FlightdetailsDirective
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [FlightService],
  bootstrap: [AppComponent]
})
export class AppModule { }
