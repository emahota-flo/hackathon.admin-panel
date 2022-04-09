import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';

import { ReviewsRoutingModule } from './reviews-routing.module';
import { ReviewsComponent } from './reviews.component';
import { ReviewHandlerComponent } from './review-handler/review-handler.component';


@NgModule({
  declarations: [
    ReviewsComponent,
    ReviewHandlerComponent,
  ],
  imports: [
    CommonModule,
    ReviewsRoutingModule,
    SharedModule,
  ],
})
export class ReviewsModule { }
