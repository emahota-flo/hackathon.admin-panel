import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NbDialogRef } from '@nebular/theme';
import { PaymentService } from '../../services/payment.service';
import { User, UserService } from '../../services/user.service';

@Component({
  selector: 'ngx-modal-confirm',
  templateUrl: './modal-confirm.component.html',
  styleUrls: ['./modal-confirm.component.scss'],
})
export class ModalPaymentComponent {

  @Input() text: string;

  paymentForm: FormGroup;
  user: User;

  constructor(protected ref: NbDialogRef<ModalPaymentComponent>,
              private paymentService: PaymentService,
              private userService: UserService) {
    this.paymentForm = new FormGroup({
      amount: new FormControl('', [Validators.required, Validators.min(100)]),
    });
    this.user = this.userService.user;
  }

  getPaymentUrl() {
    this.paymentService.getPaymentUrl(this.paymentForm.value)
      .subscribe(() => this.ref.close());
  }
}
