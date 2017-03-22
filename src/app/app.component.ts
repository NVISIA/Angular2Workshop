import { Component } from '@angular/core';
import {ReservationService} from "./shared/reservation.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public restaurants: Array<any>;

  constructor(private reservationService:ReservationService) {}

  public ngOnInit() {
    this.reservationService
      .getRestaurants()
      .subscribe( (data:any) => {
        this.restaurants = data;
      });
  }
}
