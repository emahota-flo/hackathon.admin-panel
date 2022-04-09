import { Component } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';

@Component({
  selector: 'ngx-input-confirm',
  templateUrl: './modal-input.component.html',
  styleUrls: ['./modal-input.component.scss'],
})
export class ModalInputComponent {


  text: string = '';
  constructor(protected ref: NbDialogRef<ModalInputComponent>) {
  }

  cancel() {
    this.ref.close('');
  }

  submit() {
    this.ref.close(this.text);
  }
}
