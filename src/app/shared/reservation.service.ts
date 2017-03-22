/**
 * Created by gfrick on 3/20/2017.
 */

import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs";
import 'rxjs/add/operator/map';

@Injectable()
export class ReservationService {

  constructor(private http:Http) {  }

  public getCurrentUser():Observable<any> {
    return this.http.get("/who").map(
      (response:Response) => {
        return response.json();
      }
    )
  }

  public getReservations(restaurant:any):Observable<any> {
    return this.http.get("/restaurants/" + restaurant.id + "/reservations").map(
      (response:Response) => {
        return response.json();
      }
    );
  }

  public saveReservation(reservation:any):Observable<any> {
    return this.http.post("/reservations", reservation).map(
      (response:Response) => {
        return response.json();
      }
    );
  }

  public getRestaurants():Observable<Array<any>> {
    return this.http.get("/restaurants").map(
      (response:Response) => {
        return response.json();
      }
    );
  }

  public getReservation(id: number):Observable<any> {
    return this.http.get("/reservations/" + id).map(
      (response:Response) => {
        return response.json();
      }
    );
  }

  getRestaurant(restaurantId: any):Observable<any> {
    return this.http.get("/restaurants/" + restaurantId).map(
      (response:Response) => {
        return response.json();
      }
    );
  }
}
