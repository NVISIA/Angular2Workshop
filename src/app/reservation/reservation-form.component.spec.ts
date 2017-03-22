import { TestBed, async } from '@angular/core/testing';
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {APP_BASE_HREF, HashLocationStrategy, LocationStrategy} from "@angular/common";
import {Observable} from "rxjs";
import {ReservationService} from "../shared/reservation.service";
import {ReservationFormComponent} from "./reservation-form.component";
import {Router} from "@angular/router";

class MockReservationService extends ReservationService {
  public getCurrentUser():Observable<any> {
    return Observable.of("George");
  }
  public getRestaurants():Observable<Array<any>> {
    return Observable.of([]);
  }
}

class MockRouter {
  public navigate(args:Array<any>) {
    return null;
  }
}

describe('ReservationFormComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule,
        HttpModule],
      declarations: [
        ReservationFormComponent
      ],
      providers: [
        { provide: APP_BASE_HREF, useValue: "/"},
        {provide: LocationStrategy, useClass: HashLocationStrategy},
        { provide: ReservationService, useClass: MockReservationService },
        { provide: Router, useClass: MockRouter }
      ]
    });
    TestBed.compileComponents();
  });

  it('should create the list component', async(() => {
    const fixture = TestBed.createComponent(ReservationFormComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

});
