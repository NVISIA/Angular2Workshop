import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {ReservationService} from "./shared/reservation.service";
import {RestaurantComponent} from "./restaurant/restaurant.component";
import {RestaurantListComponent} from "./restaurant/restaurant-list.component";
import {LocationStrategy, HashLocationStrategy} from "@angular/common";
import {routing} from "./app.routing";
import {AvailableTimesComponent} from "./restaurant/available-times.component";
import {ReservationFormComponent} from "./reservation/reservation-form.component";
import {ReservationComponent} from "./reservation/reservation.component";

@NgModule({
  declarations: [
    AppComponent,
    AvailableTimesComponent,
    ReservationComponent,
    ReservationFormComponent,
    RestaurantComponent,
    RestaurantListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [
    {provide: LocationStrategy, useClass: HashLocationStrategy},
    ReservationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
