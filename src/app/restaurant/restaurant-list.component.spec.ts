import { TestBed, async } from '@angular/core/testing';
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {APP_BASE_HREF, HashLocationStrategy, LocationStrategy} from "@angular/common";
import {Observable} from "rxjs";
import {routing} from "../app.routing";
import {ReservationService} from "../shared/reservation.service";
import {AvailableTimesComponent} from "./available-times.component";
import {ReservationComponent} from "../reservation/reservation.component";
import {RestaurantComponent} from "./restaurant.component";
import {RestaurantListComponent} from "./restaurant-list.component";
import {ReservationFormComponent} from "../reservation/reservation-form.component";

class MockReservationService extends ReservationService {
  public getCurrentUser():Observable<any> {
    return Observable.of("George");
  }
  public getRestaurants():Observable<Array<any>> {
    return Observable.of([]);
  }
}

describe('RestaurantListComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [routing, FormsModule,
        HttpModule],
      declarations: [
        AvailableTimesComponent,
        ReservationFormComponent,
        ReservationComponent,
        RestaurantComponent,
        RestaurantListComponent
      ],
      providers: [

        { provide: APP_BASE_HREF, useValue: "/"},
        {provide: LocationStrategy, useClass: HashLocationStrategy},
        { provide: ReservationService, useClass: MockReservationService }
      ]
    });
    TestBed.compileComponents();
  });

  it('should create the list component', async(() => {
    const fixture = TestBed.createComponent(RestaurantListComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

});
