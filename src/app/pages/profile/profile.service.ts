import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { ToastrService } from '../../shared/services/toastr.service';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {

  constructor(private http: HttpClient,
              private authService: AuthService,
              private toastrService: ToastrService) {
  }
}
