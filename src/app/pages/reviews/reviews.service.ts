import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { APIService } from '../../shared/services/api.service';
import { mockReviews } from './mock-data';
import { Review } from './reviews.interface';

@Injectable({
  providedIn: 'root',
})
export class ReviewsService {

  public reviews: Review[] = [];

  constructor(
    private apiService: APIService,
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

  public cancelReview(review: Review, message: string): Observable<any> {
    return of(1);
  }

  public acceptReview(review: Review): Observable<any> {
    return of(1);
  }
}
