import { DateTimeRange } from './date-time-range';

export interface ReportRequestBody extends DateTimeRange {
  rangeId: number;
}

export interface FullReportRequestBody extends DateTimeRange {
  id: string;
}

export interface GunsReport {
  id: string;
  name: string;
  count: number;
  miss: number;
  testingShoots: number;
  sightingShoots: number;
  shots: number;
}

export interface GamesReport {
  id: string;
  name: string;
  count: number;
  sum: number;
}

export interface OperatorsReport {
  id: string;
  name: string;
  count: number;
  miss: number;
  testingShoots: number;
  prizes: number;
}

export interface FullGunsReport {
  dateEnd: Date;
  dateStart: Date;
  name: string;
  price: number;
}

export interface FullGamesReport {
  dateEnd: Date;
  dateStart: Date;
  name: string;
  price: number;
}

export interface FullOperatorsReport {
  id: number;
  name: string;
}
