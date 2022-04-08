import { DateTimeRange } from './interfaces/date-time-range';

export type Action = '+' | '-';


/** Date management */
export function getDay(): DateTimeRange {
  const date: Date = new Date();
  const timeStart: Date = new Date(new Date(date.setHours(0)).setMinutes(0));
  const timeEnd: Date = new Date(new Date(date.setHours(23)).setMinutes(59));

  return { timeStart, timeEnd };
}

export function getWeek(): DateTimeRange {
  const day_milliseconds = 24 * 60 * 60 * 1000;
  const date: Date = new Date();
  const day: number = date.getDay();

  let timeStart = new Date(date.setDate(date.getDate() - day + (day === 0 ? -6 : 1)));
  let timeEnd = new Date(timeStart.getTime() + 6 * day_milliseconds);

  timeStart = new Date(new Date(timeStart.setHours(0)).setMinutes(0));
  timeEnd = new Date(new Date(timeEnd.setHours(23)).setMinutes(59));

  return { timeStart, timeEnd };
}

export function getMonth(): DateTimeRange {
  const date: Date = new Date();

  /** date start */
  let timeStart: Date = new Date(date.setDate(1));
  timeStart = new Date(new Date(timeStart.setHours(0)).setMinutes(0));
  /** date end */
  let timeEnd: Date;
  timeEnd = new Date(new Date(date.setDate(1)).setMonth(date.getMonth() + 1));
  timeEnd = new Date(new Date(timeEnd.setHours(0)).setMinutes(0));

  return { timeStart, timeEnd };
}

export function getYear(): DateTimeRange {
  const date = new Date();
  /** date start */
  let timeStart: Date = new Date(date.setDate(1));
  timeStart = new Date(timeStart.setMonth(0));
  timeStart = new Date(new Date(timeStart.setHours(0)).setMinutes(0));
  /** date end */
  let timeEnd: Date = new Date(date.setDate(1));
  timeEnd = new Date(timeEnd.setMonth(0));
  timeEnd = new Date(new Date(timeEnd.setHours(0)).setMinutes(0));
  timeEnd = new Date(timeEnd.setFullYear(timeEnd.getFullYear() + 1));

  return { timeStart, timeEnd };
}

export function editDay(action: Action, timeStart: Date, timeEnd: Date): DateTimeRange {
  timeStart = prepareStringToDate(timeStart);
  timeEnd = prepareStringToDate(timeEnd);

  const day_milliseconds: number = 24 * 60 * 60 * 1000;
  return calculateDate(action, timeStart, timeEnd, day_milliseconds);
}

export function editWeek(action: Action, timeStart: Date, timeEnd: Date): DateTimeRange {
  timeStart = prepareStringToDate(timeStart);
  timeEnd = prepareStringToDate(timeEnd);

  const week_milliseconds: number = 24 * 60 * 60 * 1000 * 7;
  return calculateDate(action, timeStart, timeEnd, week_milliseconds);
}

export function editMonth(action: Action, timeStart: Date, timeEnd: Date): DateTimeRange {
  timeStart = prepareStringToDate(timeStart);
  timeEnd = prepareStringToDate(timeEnd);

  if (action === '+') {
    timeStart = new Date(timeStart.setMonth(timeStart.getMonth() + 1));
    timeEnd = new Date(timeEnd.setMonth(timeEnd.getMonth() + 1));
  }

  if (action === '-') {
    timeStart = new Date(timeStart.setMonth(timeStart.getMonth() - 1));
    timeEnd = new Date(timeEnd.setMonth(timeEnd.getMonth() - 1));
  }

  return { timeStart, timeEnd };
}

export function editYear(value: Action, timeStart: Date, timeEnd: Date): DateTimeRange {
  timeStart = prepareStringToDate(timeStart);
  timeEnd = prepareStringToDate(timeEnd);

  if (value === '+') {
    timeStart = new Date(timeStart.setFullYear(timeStart.getFullYear() + 1));
    timeEnd = new Date(timeEnd.setFullYear(timeEnd.getFullYear() + 1));
  }

  if (value === '-') {
    timeStart = new Date(timeStart.setFullYear(timeStart.getFullYear() - 1));
    timeEnd = new Date(timeEnd.setFullYear(timeEnd.getFullYear() - 1));
  }

  return { timeStart, timeEnd };
}

function calculateDate(action: Action, timeStart: Date, timeEnd: Date, value: number): DateTimeRange {
  timeStart = prepareStringToDate(timeStart);
  timeEnd = prepareStringToDate(timeEnd);

  if (action === '+') {
    timeStart = new Date(+timeStart + value);
    timeEnd = new Date(+timeEnd + value);
  }

  if (action === '-') {
    timeStart = new Date(+timeStart - value);
    timeEnd = new Date(+timeEnd - value);
  }

  return { timeStart, timeEnd };
}

function prepareStringToDate(dateString: Date | string) {
  if (dateString instanceof Date) {
    return dateString;
  }

  return new Date(dateString);
}
