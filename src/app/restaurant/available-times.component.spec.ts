import { TestBed, async } from '@angular/core/testing';
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {Observable} from "rxjs";
import {ReservationService} from "../shared/reservation.service";
import {AvailableTimesComponent} from "./available-times.component";
import {RestaurantListComponent} from "./restaurant-list.component";

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
      imports: [ FormsModule,
        HttpModule],
      declarations: [
        AvailableTimesComponent
      ],
      providers: [
        { provide: ReservationService, useClass: MockReservationService }
      ]
    });
    TestBed.compileComponents();
  });

  it('should create the list component', async(() => {
    const fixture = TestBed.createComponent(AvailableTimesComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

});
