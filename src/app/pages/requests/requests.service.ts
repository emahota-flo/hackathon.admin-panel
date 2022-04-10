import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { APIService } from '../../shared/services/api.service';
import { mockRequests } from './mock-data';
import { HumanRequest } from '../../shared/interfaces/request';

export interface ReviewBody {
  title: string;
  text: string;
  requests: HumanRequest[];
}

@Injectable({
  providedIn: 'root',
})
export class RequestsService {

  public selectedRequests: BehaviorSubject<HumanRequest[]> = new BehaviorSubject<HumanRequest[]>([]);

  constructor(
    private apiService: APIService,
  ) {
  }

  public selectRequest(req: HumanRequest): void {
    if (!!this.selectedRequests.getValue().find(x => x.requestId === req.requestId)) {
      const selectedRequests = this.selectedRequests.getValue().filter(request => request.requestId !== req.requestId);
      this.selectedRequests.next(selectedRequests);
    } else {
      const selectedRequests = this.selectedRequests.getValue();
      selectedRequests.push(req);
      this.selectedRequests.next(selectedRequests);
    }
  }

  public clearSelectedRequests() {
    this.selectedRequests.next([]);
  }

  public getRequestsMock(): Observable<HumanRequest[]> {
    return of(mockRequests);
  }

  public onReview(body: ReviewBody): Observable<void> {
    return of(null);
  }
}
