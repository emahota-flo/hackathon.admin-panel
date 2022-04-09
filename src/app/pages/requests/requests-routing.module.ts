import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RequestHandlerComponent } from './request-handler/request-handler.component';
import { RequestsComponent } from './requests.component';

const routes: Routes = [
  {
    path: '',
    component: RequestsComponent,
  },
  {
    path: 'handle',
    component: RequestHandlerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RequestsRoutingModule {
}
