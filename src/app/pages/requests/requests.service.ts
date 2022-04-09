import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
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

  constructor() {
  }

  public selectRequest(req: HumanRequest): void {
    if (!!this.selectedRequests.getValue().find(x => x.id === req.id)) {
      const selectedRequests = this.selectedRequests.getValue().filter(request => request.id !== req.id);
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

  public getRequests(): Observable<HumanRequest[]> {
    return of(mockRequests);
  }

  public onReview(body: ReviewBody): Observable<void> {
    return of(null);
  }
}
