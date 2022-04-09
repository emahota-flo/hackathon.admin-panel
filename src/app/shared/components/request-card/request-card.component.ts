import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { HumanRequest } from '../../interfaces/request';

@Component({
  selector: 'ngx-request-card',
  templateUrl: './request-card.component.html',
  styleUrls: ['./request-card.component.scss'],
})
export class RequestCardComponent implements OnInit {

  @Input() request: HumanRequest;
  @Input() isSelected: boolean = false;
  @Input() selectedTags: string[] = [];

  @Output() onReq: EventEmitter<HumanRequest> = new EventEmitter<HumanRequest>();

  constructor() {
  }

  ngOnInit(): void {
  }

  public onRequest() {
    this.onReq.emit(this.request);
  }

  public status(): string {
    switch (this.request.status) {
      case 'done':
        return 'Выполнено';
      case 'created':
        return 'Создано';
      case 'reject':
        return 'Отменено';
      case 'inProgress':
        return 'В обработке';
      case 'readyToReview':
        return 'Готово к проверке';
      case 'review':
        return 'Проверяется';
    }
  }

  public isTagSelected(tag: string): boolean {
    return this.selectedTags.includes(tag);
  }
}
