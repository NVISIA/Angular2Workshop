import {Component, Input} from '@angular/core';
import {ReservationService} from "../shared/reservation.service";
import {ActivatedRoute, Params, Router} from "@angular/router";

@Component({
  selector: 'reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent {

  public reservation:any;
  public restaurant:any;

  constructor(private router: Router, private route: ActivatedRoute, private reservationService: ReservationService) {
    this.reservation = {};
    this.restaurant = {};
  }

  public ngOnInit() {
    let id = this.route.snapshot.params['id'];
     this.reservationService.getReservation(id).subscribe(
       (data: any) => {
         this.reservation = data;
         this.reservationService.getRestaurant(data.restaurantId).subscribe(
           (data2: any) => {
             this.restaurant = data2;
           }
         );
       }
     )
  }

  public commandReturn() {
    this.router.navigate(['/']);
  }

}

