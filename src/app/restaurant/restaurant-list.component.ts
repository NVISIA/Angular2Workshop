import {Component, Input} from '@angular/core';
import {ReservationService} from "../shared/reservation.service";

@Component({
  selector: 'restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.css']
})
export class RestaurantListComponent {

  public restaurants: Array<any>;



  constructor(private reservationService:ReservationService) {
    this.restaurants = [];
  }

  public ngOnInit() {
    this.reservationService.getRestaurants().subscribe( (data:Array<any>) => { this.restaurants = data; });
  }

}
