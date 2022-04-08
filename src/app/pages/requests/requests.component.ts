import { Component, OnInit } from '@angular/core';

export type RequestStatus = 'created' | 'inProgress' | 'readyToReview' | 'review' | 'done' | 'reject';
export type RequestType = 'complaint' | 'reviews';

export interface Request {
  id: string;
  type: RequestType;
  status: RequestStatus;
  tags: string[];
  title: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
  city: string;
  institution: string;
}

@Component({
  selector: 'ngx-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.scss'],
})
export class RequestsComponent implements OnInit {

  public requests: Request[] = [
    {
      id: '1111111',
      type: 'complaint',
      status: 'created',
      tags: ['Жалоба на скорость обслуживания'],
      title: 'Жалоба на сотрудника',
      description: 'Довожу до Вашего сведения, что на горячую линию обратился клиент (ФИО, тел. ) с жалобой на задержку выдачи результата.  Клиент обратился  в   ПЗ  для сдачи биоматериала на исследование «Коронавирус».   Клиент недоволен тем, что 13.05.2020 г. исследование  не было выполнено. Клиент считает, что лаборатория нарушает сроки выполнения исследования – 2 рабочих дня. Клиент просит разобраться и принять меры. Ждет   звонка администрации.',
      createdAt: new Date(),
      updatedAt: new Date(),
      city: 'Краснодар',
      institution: 'Краевая больница',
    },
    {
      id: '2222222',
      type: 'complaint',
      status: 'created',
      tags: ['Жалоба на сотрудника', 'Некорректное общение', 'Оскорбления'],
      title: 'Скорость обработки',
      description: 'Довожу до Вашего сведения, что на горячую линию обратился клиент (ФИО, тел. ) с жалобой на задержку выдачи результата.  Клиент обратился  в   ПЗ  для сдачи биоматериала на исследование «Коронавирус».   Клиент недоволен тем, что 13.05.2020 г. исследование  не было выполнено. Клиент считает, что лаборатория нарушает сроки выполнения исследования – 2 рабочих дня. Клиент просит разобраться и принять меры. Ждет   звонка администрации.',
      createdAt: new Date(),
      updatedAt: new Date(),
      city: 'Краснодар',
      institution: 'Краевая больница',
    },
    {
      id: '33333333',
      type: 'complaint',
      status: 'created',
      tags: ['Некорректные результаты работы'],
      title: 'Качество обслуживания',
      description: 'Довожу до Вашего сведения, что на горячую линию обратился клиент (ФИО, тел. ) с жалобой на задержку выдачи результата.  Клиент обратился  в   ПЗ  для сдачи биоматериала на исследование «Коронавирус».   Клиент недоволен тем, что 13.05.2020 г. исследование  не было выполнено. Клиент считает, что лаборатория нарушает сроки выполнения исследования – 2 рабочих дня. Клиент просит разобраться и принять меры. Ждет   звонка администрации.',
      createdAt: new Date(),
      updatedAt: new Date(),
      city: 'Краснодар',
      institution: 'Краевая больница',
    },
  ];

  public selectedRequests: Request[] = [];

  constructor() {
  }

  ngOnInit(): void {
  }

  public selectRequest(req: Request) {
    if (!!this.selectedRequests.find(x => x.id === req.id)) {
      this.selectedRequests = this.selectedRequests.filter(request => request.id !== req.id);
    } else {
      this.selectedRequests.push(req);
    }
  }

  public isRequestSelected(req: Request): boolean {
    return !!this.selectedRequests.find(x => x.id === req.id);
  }
}
