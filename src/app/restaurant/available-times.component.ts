import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'available-times',
  templateUrl: './available-times.component.html',
  styleUrls: ['./available-times.component.css']
})
export class AvailableTimesComponent {

  @Input() public availableTimes: Array<any>;
  @Output() public selectTime = new EventEmitter();

  constructor() {
    this.availableTimes = [];
  }

  public commandSelect(time: any) {
    this.selectTime.emit(time);
  }
}
