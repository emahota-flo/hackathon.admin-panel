import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NbDialogService } from '@nebular/theme';
import { takeUntil } from 'rxjs/operators';
import { GlbUnsubscribe } from '../../../@core/glb-unsubscribe';
import { ModalAnswersComponent } from '../../../shared/components/modal-answers/modal-answer.component';
import { HumanRequest } from '../../../shared/interfaces/request';
import { AnswersService } from '../../../shared/services/answers.service';
import { RequestsService } from '../requests.service';

@Component({
  selector: 'ngx-request-handler',
  templateUrl: './request-handler.component.html',
  styleUrls: ['./request-handler.component.scss'],
})
export class RequestHandlerComponent extends GlbUnsubscribe implements OnInit {

  public selectedRequests: HumanRequest[] = [];
  public answerForm: FormGroup;

  private typicalAnswers: string[] = [];

  public isSentRequests: boolean = false;

  constructor(private reqService: RequestsService,
              private dialogService: NbDialogService,
              private answersService: AnswersService,
              private router: Router) {
    super();
    this.answerForm = new FormGroup({
      title: new FormControl('', [Validators.required]),
      text: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {
    this.reqService.selectedRequests
      .pipe(takeUntil(this.unsubscribe))
      .subscribe((reqs: HumanRequest[]) => {
        this.selectedRequests = reqs.map(req => {
          return { ...req, status: 'inProgress' };
        });
      });

    this.answersService.getAnswers()
      .subscribe((answers: string[]) => this.typicalAnswers = answers);
  }

  public showTypicalAnswers() {
    this.dialogService.open(ModalAnswersComponent, {
      context: { answers: this.typicalAnswers },
    }).onClose.subscribe((answer: string) => {
      if (answer) {
        this.answerForm.controls['text'].setValue(answer);
      }
    });
  }

  public onReview(): void {
    this.reqService.onReview({
      ...this.answerForm.value,
      requests: this.selectedRequests,
    }).subscribe(() => {
      this.reqService.clearSelectedRequests();
      this.isSentRequests = true;
    });
  }

  public onBack(): void {
    this.router.navigate(['pages', 'requests']).then();
  }
}
