import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { mockReviews } from './mock-data';
import { Review } from './reviews.interface';

@Injectable({
  providedIn: 'root',
})
export class ReviewsService {

  public reviews: Review[] = [];

  constructor() {
  }

  public getReviewGroup(): Observable<Review[]> {
    this.reviews = mockReviews;
    return of(mockReviews);
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
