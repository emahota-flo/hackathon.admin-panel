import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NbDialogModule, NbWindowModule } from '@nebular/theme';
import { SharedModule } from '../shared/shared.module';
import { LoginComponent } from './login/login.component';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';

@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    SharedModule,
    NbDialogModule.forChild(),
    NbWindowModule.forChild(),
  ],
})
export class AuthModule {
}
