import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NbDialogService } from '@nebular/theme';
import { ModalConfirmComponent } from '../../../shared/components/modal-confirm/modal-confirm.component';
import { ModalInputComponent } from '../../../shared/components/modal-input/modal-input.component';
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

  public isReviewSent: boolean = false;

  constructor(private reviewService: ReviewsService,
              private router: Router,
              private route: ActivatedRoute,
              public dialogService: NbDialogService) {

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

  public cancel() {
    this.dialogService.open(ModalInputComponent)
      .onClose
      .subscribe((message: string) => {
        if (message) {
          this.reviewService.cancelReview(this.review, message).subscribe(() => this.isReviewSent = true);
        }
      });
  }

  public onReview() {
    this.dialogService.open(ModalConfirmComponent, {
      context: {
        text: 'Вы уверены, этой действие отправит данный ответ на все прикрепленные жалобы?',
      },
    }).onClose
      .subscribe((isConfirm: boolean) => {
        if (isConfirm) {
          this.reviewService.acceptReview(this.review).subscribe(() => this.isReviewSent = true);
        }
      });
  }

}
