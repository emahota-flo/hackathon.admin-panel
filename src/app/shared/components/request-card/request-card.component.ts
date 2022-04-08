import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Request } from '../../../pages/requests/requests.component';

@Component({
  selector: 'ngx-request-card',
  templateUrl: './request-card.component.html',
  styleUrls: ['./request-card.component.scss'],
})
export class RequestCardComponent implements OnInit {

  @Input() request: Request;
  @Input() isSelected: boolean = false;
  @Output() onReq: EventEmitter<Request> = new EventEmitter<Request>();
  constructor() { }

  ngOnInit(): void {
  }

  public onRequest() {
    this.onReq.emit(this.request);
  }

  public status(): string {
    switch (this.request.status) {
      case 'done': return 'Выполнено';
      case 'created': return 'Создано';
    }
  }
}
