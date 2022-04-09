import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { RequestHandlerComponent } from './request-handler/request-handler.component';
import { RequestsRoutingModule } from './requests-routing.module';
import { RequestsComponent } from './requests.component';


@NgModule({
  declarations: [
    RequestsComponent,
    RequestHandlerComponent,
  ],
  imports: [
    CommonModule,
    RequestsRoutingModule,
    SharedModule,
  ],
})
export class RequestsModule {
}
