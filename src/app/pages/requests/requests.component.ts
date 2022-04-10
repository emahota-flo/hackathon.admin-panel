import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NbDialogService } from '@nebular/theme';
import { takeUntil } from 'rxjs/operators';
import { GlbUnsubscribe } from '../../@core/glb-unsubscribe';
import { ModalConfirmComponent } from '../../shared/components/modal-confirm/modal-confirm.component';
import { RequestStatus, HumanRequest } from '../../shared/interfaces/request';
import { APIService } from '../../shared/services/api.service';
import { RequestsService } from './requests.service';

@Component({
  selector: 'ngx-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.scss'],
})
export class RequestsComponent extends GlbUnsubscribe implements OnInit {

  public requests: HumanRequest[] = [];

  public selectedRequests: HumanRequest[] = [];
  public tags: string[] = [];
  public selectedTags: string[] = [];
  public selectedStatus: RequestStatus | null = null;

  constructor(
    private reqService: RequestsService,
    private router: Router,
    private route: ActivatedRoute,
    private dialogService: NbDialogService,
    private apiService: APIService,
  ) {
    super();
  }

  ngOnInit(): void {
    this.reqService.selectedRequests
      .pipe(takeUntil(this.unsubscribe))
      .subscribe((reqs) => this.selectedRequests = reqs);

    this.reqService.getRequestsMock().subscribe((data) => {
      /* tslint:disable */
      console.log(data);
    });
    this.apiService.getRequests()
      .subscribe((reqs: HumanRequest[]) => {
        console.log(reqs);
        this.requests = reqs;

        const tags = new Set();
        this.requests.forEach((req: HumanRequest) => req.tags.forEach((tag) => tags.add(tag)));
        this.tags = [...tags] as string[];
      });
  }

  public selectRequest(req: HumanRequest) {
    this.reqService.selectRequest(req);
  }

  public selectStatus(status: RequestStatus): void {
    this.selectedStatus === status ? this.selectedStatus = null : this.selectedStatus = status;
  }

  public onHandle() {
    if (this.selectedRequests.some(r => r.status === 'created')) {
      this.dialogService.open(ModalConfirmComponent, {
        context: {
          text: 'Взять себе в обработку новые заявки? Создано -> В обработке',
        },
      })
        .onClose.subscribe(action => {
        if (action) {
          this.router.navigate(['handle'], { relativeTo: this.route }).then();
        }
      });
    } else {
      this.router.navigate(['handle'], { relativeTo: this.route }).then();
    }
  }

  public clearFilters() {
    this.selectedStatus = null;
    this.selectedTags = [];
    this.reqService.clearSelectedRequests();
  }

  /**
   * UI functions
   * */

  public isRequestSelected(req: HumanRequest): boolean {
    return !!this.selectedRequests.find(x => x.requestId === req.requestId);
  }

  public isFilterByTags(tags: string[]): boolean {
    if (!this.selectedTags.length) {
      return true;
    }

    let isFilter: boolean = true;
    for (const tag of this.selectedTags) {
      if (!tags.includes(tag)) {
        isFilter = false;
        break;
      }
    }

    return isFilter;
  }

  public isFilterByStatus(status: RequestStatus) {
    if (!this.selectedStatus) {
      return false;
    }
    return status !== this.selectedStatus;
  }

  public quantityByStatus(status: RequestStatus): number {
    return this.requests.filter(r => r.status === status).length;
  }
}
