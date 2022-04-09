import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReviewHandlerComponent } from './review-handler/review-handler.component';
import { ReviewsComponent } from './reviews.component';

const routes: Routes = [
  {
    path: '',
    component: ReviewsComponent,
  }, {
    path: ':id',
    component: ReviewHandlerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReviewsRoutingModule {
}
