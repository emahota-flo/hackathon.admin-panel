import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { AuthService } from '../../auth/auth.service';
import { ToastrService } from './toastr.service';

@Injectable({
  providedIn: 'root',
})
export class PaymentService {

  constructor(private authService: AuthService,
              private http: HttpClient,
              private toastrService: ToastrService) {
  }

  getPaymentUrl(amount: { amount: number }): Observable<{ url: string }> {
    return this.http.post<{ url: string }>(`${environment.apiUrl}/payrequest`, amount, this.authService.headers)
      .pipe(
        map(({ url }) => {
          if (url) {
            window.open(url, '_blank');
          }
        }),
        catchError(error => this.toastrService.showError(error)),
      );
  }
}
