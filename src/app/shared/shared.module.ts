import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbMenuModule, NbTimepickerModule } from '@nebular/theme';
import { RecaptchaFormsModule, RecaptchaModule } from 'ng-recaptcha';
import { ThemeModule } from '../@theme/theme.module';
import { FormsModule as ngFormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalCodeConfirmComponent } from './components/modal-code-confirm/modal-code-confirm.component';
import { ModalConfirmComponent } from './components/modal-confirm/modal-confirm.component';
import { ModalPaymentComponent } from './components/modal-payment/modal-confirm.component';
import { NB_MODULES } from './exports/nb-modules';
import { DateSettingsComponent } from './components/date-settings/date-settings.component';

@NgModule({
  declarations: [
    ModalConfirmComponent,
    DateSettingsComponent,
    ModalCodeConfirmComponent,
    ModalPaymentComponent,
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
    ModalConfirmComponent,
    ModalCodeConfirmComponent,
    DateSettingsComponent,
  ],
})
export class SharedModule {
}
