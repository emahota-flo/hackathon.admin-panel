import { Component, Input } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';

@Component({
  selector: 'ngx-modal-confirm',
  templateUrl: './modal-confirm.component.html',
  styleUrls: ['./modal-confirm.component.scss'],
})
export class ModalConfirmComponent {

  @Input() text: string;

  constructor(protected ref: NbDialogRef<ModalConfirmComponent>) {
  }

  cancel() {
    this.ref.close(false);
  }

  submit() {
    this.ref.close(true);
  }
}
