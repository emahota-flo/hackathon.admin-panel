import { Component, Input } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';

@Component({
  selector: 'ngx-modal-answer',
  templateUrl: './modal-answer.component.html',
  styleUrls: ['./modal-answer.component.scss'],
})
export class ModalAnswersComponent {

  @Input() answers: string[];

  constructor(protected ref: NbDialogRef<ModalAnswersComponent>) {
  }

  select(answer: string | null) {
    this.ref.close(answer);
  }
}
