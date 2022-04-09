import { Component, OnInit } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { GlbUnsubscribe } from '../../../@core/glb-unsubscribe';
import { HumanRequest } from '../../../shared/interfaces/request';
import { RequestsService } from '../requests.service';

@Component({
  selector: 'ngx-request-handler',
  templateUrl: './request-handler.component.html',
  styleUrls: ['./request-handler.component.scss'],
})
export class RequestHandlerComponent extends GlbUnsubscribe implements OnInit {

  public selectedRequests: HumanRequest[] = [];

  constructor(private reqService: RequestsService) {
    super();
  }

  ngOnInit(): void {
    this.reqService.selectedRequests
      .pipe(takeUntil(this.unsubscribe))
      .subscribe((reqs: HumanRequest[]) => {
        this.selectedRequests = reqs.map(req => {
          return { ...req, status: 'inProgress' };
        });
      });
  }

}
