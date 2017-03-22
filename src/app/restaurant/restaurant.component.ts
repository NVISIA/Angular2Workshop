import {Component, Input} from '@angular/core';
import {ReservationService} from "../shared/reservation.service";

@Component({
  selector: 'restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent {

  @Input() public restaurant: any;
  public availableTimes: Array<any>;
  public selectedTime: any;

  constructor(private reservationService: ReservationService) {
    this.restaurant = {};
    this.availableTimes = [];
  }

  public commandShowTimes() {
    this.reservationService.getReservations(this.restaurant).subscribe(
      (data: any) => {
        this.availableTimes = data.available;
      }
    )
  }

  public onTimeSelect(event: any) {
    this.selectedTime = event;
  }

}

