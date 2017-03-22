import {Component, Input} from '@angular/core';
import {ReservationService} from "../shared/reservation.service";
import {Router} from "@angular/router";

@Component({
  selector: 'reservation-form',
  templateUrl: './reservation-form.component.html',
  styleUrls: ['./reservation-form.component.css']
})
export class ReservationFormComponent {

  @Input() public restaurant: any;
  @Input() public selectedTime: any;

  constructor(private router: Router, private reservationService: ReservationService) {
    this.restaurant = {};
    this.selectedTime = null;
  }

  public commandSubmit(form, event) {
    event.preventDefault();
    let newReservation = Object.assign(form.value, {time: this.selectedTime, restaurantId: this.restaurant.id});
    this.reservationService.saveReservation(newReservation).subscribe(
      (response: any) => {
        this.router.navigate(['/reservation', response.id]);
      }
    )
  }
}

