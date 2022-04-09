import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Review } from './reviews.interface';
import { ReviewsService } from './reviews.service';

@Component({
  selector: 'ngx-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss'],
})
export class ReviewsComponent implements OnInit {

  public reviewGroups: Review[] = [];

  constructor(private reviewsService: ReviewsService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.reviewsService.getReviewGroup()
      .subscribe((reviewGroups) => this.reviewGroups = reviewGroups);
  }

  public onReview(review: Review) {
    this.router.navigate([review.id], { relativeTo: this.route }).then();
  }
}
