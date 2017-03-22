import { TestBed, async } from '@angular/core/testing';
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {APP_BASE_HREF, HashLocationStrategy, LocationStrategy} from "@angular/common";
import {Observable} from "rxjs";
import {ReservationService} from "../shared/reservation.service";
import {ReservationComponent} from "./reservation.component";
import {Routes, RouterModule} from "@angular/router";

class MockReservationService extends ReservationService {
  public getCurrentUser():Observable<any> {
    return Observable.of("George");
  }
  public getRestaurants():Observable<Array<any>> {
    return Observable.of([]);
  }
}

const routes: Routes = [
  { path: 'reservation/:id', component: ReservationComponent }
];

const routing = RouterModule.forRoot(routes);


describe('RestaurantListComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [routing, FormsModule,
        HttpModule],
      declarations: [
        ReservationComponent
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
    const fixture = TestBed.createComponent(ReservationComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

});
