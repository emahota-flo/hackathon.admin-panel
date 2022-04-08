import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { AuthService } from '../../auth/auth.service';
import { getDateISOStringWithoutTimezone } from '../helper';
import {
  FullGamesReport,
  FullGunsReport, FullOperatorsReport,
  FullReportRequestBody,
  GamesReport,
  GunsReport,
  OperatorsReport,
  ReportRequestBody,
} from '../interfaces/report';
import { ToastrService } from './toastr.service';

@Injectable({
  providedIn: 'root',
})
export class ReportsService {

  constructor(private http: HttpClient,
              private authService: AuthService,
              private toastrService: ToastrService) {
  }

  public getGunsReport(reportRequestBody: ReportRequestBody): Observable<GunsReport[]> {
    return this.templateForRequestOnReport<GunsReport[]>(reportRequestBody, 'reports/guns');
  }

  public getGamesReport(reportRequestBody: ReportRequestBody): Observable<GamesReport[]> {
    return this.templateForRequestOnReport<GamesReport[]>(reportRequestBody, 'reports/games');
  }

  public getOperatorsReport(reportRequestBody: ReportRequestBody): Observable<OperatorsReport[]> {
    return this.templateForRequestOnReport<OperatorsReport[]>(reportRequestBody, 'reports/operators');
  }

  public getFullGunsReport(reportRequestBody: FullReportRequestBody): Observable<FullGunsReport[]> {
    return this.templateForRequestOnReport<FullGunsReport[]>(reportRequestBody, 'fullReports/guns');
  }

  public getFullGamesReport(reportRequestBody: FullReportRequestBody): Observable<FullGamesReport[]> {
    return this.templateForRequestOnReport<FullGamesReport[]>(reportRequestBody, 'fullReports/games');
  }

  public getFullOperatorsReport(reportRequestBody: FullReportRequestBody): Observable<FullOperatorsReport[]> {
    return this.templateForRequestOnReport<FullOperatorsReport[]>(reportRequestBody, 'fullReports/operators');
  }

  private templateForRequestOnReport<T>(body: ReportRequestBody | FullReportRequestBody, url: string): Observable<T> {
    return this.http.post<T>(
      `${environment.apiUrl}${url}`,
      this.getRequestBodyWithoutTimezone(body),
      this.authService.headers,
    ).pipe(catchError((error) => this.toastrService.showError(error)));
  }

  private getRequestBodyWithoutTimezone(body: ReportRequestBody | FullReportRequestBody) {
    return {
      ...body,
      timeStart: getDateISOStringWithoutTimezone(body.timeStart),
      timeEnd: getDateISOStringWithoutTimezone(body.timeEnd),
    };
  }
}
