import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NbDialogRef } from '@nebular/theme';
import { ToastrService } from '../../services/toastr.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'ngx-modal-code-confirm',
  templateUrl: './modal-code-confirm.component.html',
  styleUrls: ['./modal-code-confirm.component.scss'],
})
export class ModalCodeConfirmComponent {

  confirmationForm: FormGroup;

  constructor(protected ref: NbDialogRef<ModalCodeConfirmComponent>,
              private userService: UserService,
              private toastrService: ToastrService) {
    this.confirmationForm = new FormGroup({
      code: new FormControl('', [Validators.required, Validators.minLength(6)]),
    });
  }

  sendCode() {
    this.userService.confirmChangeEmailOrPhone(this.confirmationForm.value.code)
      .subscribe(() => {
        this.toastrService.showSuccessToaster('Успех!', 'Данные пользователя успешно обновлены');
        this.ref.close(true);
      });
  }
}
