import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Review } from '../reviews.interface';
import { ReviewsService } from '../reviews.service';

@Component({
  selector: 'ngx-review-handler',
  templateUrl: './review-handler.component.html',
  styleUrls: ['./review-handler.component.scss'],
})
export class ReviewHandlerComponent implements OnInit {

  public isEditMode: boolean = false;
  public review: Review;
  public answerForm: FormGroup;
  constructor(private reviewService: ReviewsService,
              private router: Router,
              private route: ActivatedRoute) {

    this.answerForm = new FormGroup({
      text: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {
    const id = this.route.snapshot.params.id;
    this.review = this.reviewService.getReviewById(id);
    if (!this.review) {
      this.onBack();
    }
    this.answerForm.setValue({ text: this.review.text });
  }

  onBack() {
    this.router.navigate(['pages', 'reviews']).then();
  }


}
