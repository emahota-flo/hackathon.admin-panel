import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from '../../../environments/environment';
import { ReviewBody } from '../../pages/requests/requests.service';
import { Review } from '../../pages/reviews/reviews.interface';
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

  public updateRequest(requestId: string, body: Partial<HumanRequest>): Observable<void> {
    return this.http.post<void>(`${this.apiUrl}admin/human-requests/${requestId}`, body);
  }

  public getAnswersByTags(tags: string[]): Observable<string[]> {
    if (!tags?.length) {
      return of([]);
    }
    return this.http.get<string[]>(`${this.apiUrl}admin/answers?tags=${tags}`);
  }

  public getRequests(): Observable<HumanRequest[]> {
    return this.http.get<HumanRequest[]>(`${this.apiUrl}admin/human-requests`);
  }

  public createReview(body: ReviewBody): Observable<void> {
    return this.http.post<void>(`${this.apiUrl}admin/reviews/`, body);
  }

  getReviewGroups(): Observable<Review[]> {
    return this.http.get<Review[]>(`${this.apiUrl}admin/reviews/`);
  }
}
