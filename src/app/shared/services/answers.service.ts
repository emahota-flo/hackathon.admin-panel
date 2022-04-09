import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { mockAnswers } from '../../pages/requests/mock-data';

@Injectable({
  providedIn: 'root',
})
export class AnswersService {

  constructor() {
  }

  public getAnswers(): Observable<string[]> {
    return of(mockAnswers);
  }
}
