import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NbComponentStatus } from '@nebular/theme';
import {
  Action,
  getDay,
  getMonth,
  getWeek,
  getYear,
  editDay,
  editWeek,
  editMonth,
  editYear,
} from '../../date-management';
import { DateTimeRange } from '../../interfaces/date-time-range';

@Component({
  selector: 'ngx-date-settings',
  templateUrl: './date-settings.component.html',
  styleUrls: ['./date-settings.component.scss'],
})
export class DateSettingsComponent implements OnInit {

  @Input() status: NbComponentStatus;
  @Input() timeStart: Date;
  @Input() timeEnd: Date;
  @Output() dateChanged: EventEmitter<DateTimeRange> = new EventEmitter<DateTimeRange>();

  constructor() {
  }

  ngOnInit(): void {
    // this.getDay();
  }

  public getDay() {
    const dateRange = getDay();
    this.dateChanged.emit(dateRange);
  }

  public getWeek() {
    const dateRange = getWeek();
    this.dateChanged.emit(dateRange);
  }

  public getMonth() {
    const dateRange = getMonth();
    this.dateChanged.emit(dateRange);
  }

  public getYear() {
    const dateRange = getYear();
    this.dateChanged.emit(dateRange);
  }

  public editDay(action: Action) {
    const dateRange = editDay(action, this.timeStart, this.timeEnd);
    this.dateChanged.emit(dateRange);
  }

  public editWeek(action: Action) {
    const dateRange = editWeek(action, this.timeStart, this.timeEnd);
    this.dateChanged.emit(dateRange);
  }

  public editMonth(action: Action) {
    const dateRange = editMonth(action, this.timeStart, this.timeEnd);
    this.dateChanged.emit(dateRange);
  }

  public editYear(action: Action) {
    const dateRange = editYear(action, this.timeStart, this.timeEnd);
    this.dateChanged.emit(dateRange);
  }

}
