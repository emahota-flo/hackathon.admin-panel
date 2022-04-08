import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { RequestsRoutingModule } from './requests-routing.module';
import { RequestsComponent } from './requests.component';


@NgModule({
  declarations: [
    RequestsComponent,
  ],
  imports: [
    CommonModule,
    RequestsRoutingModule,
    SharedModule,
  ],
})
export class RequestsModule {
}
