import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { AuthService } from '../../auth/auth.service';
import { ToastrService } from './toastr.service';

export interface User {
  id: string;
  role: string;
  name: string;
}

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private _user: User = { id: '2138', role: '', name: 'Eugene Mahota' };
  public userSubject: BehaviorSubject<User> = new BehaviorSubject<User>(this._user);

  constructor(private authService: AuthService,
              private http: HttpClient,
              private toastrService: ToastrService,
              private router: Router) {
  }

  get user(): User {
    return this._user;
  }

  public async isUserLogin(): Promise<boolean> {
    return true;
  }
}
