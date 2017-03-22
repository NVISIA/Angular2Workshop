import { RouterModule, Routes } from '@angular/router';
import {RestaurantListComponent} from "./restaurant/restaurant-list.component";
import {ReservationComponent} from "./reservation/reservation.component";

const routes: Routes = [
  { path: '', component: RestaurantListComponent },
  { path: 'reservation/:id', component: ReservationComponent }
];

export const routing = RouterModule.forRoot(routes);
