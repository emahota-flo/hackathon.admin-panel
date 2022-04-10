import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { APIService } from '../../shared/services/api.service';
import { ReviewBody } from '../requests/requests.service';
import { mockReviews } from './mock-data';
import { Review } from './reviews.interface';

@Injectable({
  providedIn: 'root',
})
export class ReviewsService {

  public reviews: Review[] = [];

  constructor(
    private apiService: APIService,
    private http: HttpClient,
  ) {
  }

  public getReviewGroup(): Observable<Review[]> {
    return this.apiService.getReviewGroups().pipe(
      tap((reviewGroups) => {
        this.reviews = reviewGroups;
        return reviewGroups;
      }));
  }

  public getReviewById(id: string): Review {
    return this.reviews.find(x => x.id === id);
  }


  public cancelReview(review: Review, message: string): Observable<void> {
    JSON.stringify({ ...review, cancelMessage: message });
    return this.http.post<void>(`${environment.apiUrl}admin/rejectReview`,
      { ...review, cancelMessage: message },
    );
  }

  public acceptReview(review: Review): Observable<any> {
    JSON.stringify(review);
    return this.http.post<void>(`${environment.apiUrl}admin/completeRequest`, review);
  }
}
