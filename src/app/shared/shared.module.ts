import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbMenuModule, NbTimepickerModule } from '@nebular/theme';
import { RecaptchaFormsModule, RecaptchaModule } from 'ng-recaptcha';
import { ThemeModule } from '../@theme/theme.module';
import { FormsModule as ngFormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalConfirmComponent } from './components/modal-confirm/modal-confirm.component';
import { NB_MODULES } from './exports/nb-modules';
import { RequestCardComponent } from './components/request-card/request-card.component';

@NgModule({
  declarations: [
    RequestCardComponent,
    ModalConfirmComponent,
  ],
  imports: [
    ...NB_MODULES,
    CommonModule,
    ThemeModule,
    NbMenuModule,
    ngFormsModule,
    ReactiveFormsModule,
    NbTimepickerModule,
    RecaptchaModule,
    RecaptchaFormsModule,
  ],
  exports: [
    ...NB_MODULES,
    ThemeModule,
    NbMenuModule,
    ngFormsModule,
    ReactiveFormsModule,
    RecaptchaModule,
    RecaptchaFormsModule,

    // components
    RequestCardComponent,
    ModalConfirmComponent,
  ],
})
export class SharedModule {
}
