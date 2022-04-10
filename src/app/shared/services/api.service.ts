import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from '../../../environments/environment';
import { mockAnswers } from '../../pages/requests/mock-data';
import { HumanRequest } from '../interfaces/request';

@Injectable({
  providedIn: 'root',
})
export class APIService {
  private readonly apiUrl: string;

  constructor(
    private http: HttpClient,
  ) {
    this.apiUrl = environment.apiUrl;
  }

  public getAnswers(): Observable<string[]> {
    return of(mockAnswers);
  }

  public getRequests(): Observable<HumanRequest[]> {
    return this.http.get<HumanRequest[]>(`${this.apiUrl}admin/human-requests`);
  }
}
