import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { ToastrService } from '../shared/services/toastr.service';

export interface LoginInterface {
  login: string;
  password: string;
  saveLogin: boolean;
}

export interface LoginResponse {
  role: string;
  token: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  private token: string;

  constructor(private http: HttpClient,
              private router: Router,
              private toastrService: ToastrService) {
    this.token = localStorage.getItem('token');
  }

  get headers() {
    return {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`,
      }),
    };
  }

  public login(login: LoginInterface): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${environment.apiUrl}/authenticate/login`, login)
      .pipe(map(({ token }) => {
        localStorage.setItem('token', token);
      }), catchError(error => this.toastrService.showError(error)));
  }

  public logout() {
    this.token = null;
    localStorage.removeItem('token');
    this.router.navigate(['auth', 'login']).then(() => window.location.reload());
  }
}
