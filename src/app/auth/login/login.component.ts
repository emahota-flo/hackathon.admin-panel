import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { finalize } from 'rxjs/operators';
import { AuthService } from '../auth.service';

@Component({
  selector: 'ngx-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  isLoading: boolean;
  loginForm: FormGroup;

  constructor(private authService: AuthService,
              private router: Router) {
    this.loginForm = new FormGroup({
      login: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      saveLogin: new FormControl(true, Validators.required),
    });
  }

  ngOnInit(): void {
  }

  login() {
    // this.isLoading = true;
    // this.authService.login(this.loginForm.value)
    //   .pipe(finalize(() => this.isLoading = false))
    //   .subscribe();

    this.router.navigate(['pages']).then();
  }

  public onRestore() {
    this.router.navigate(['auth', 'restore']).then();
  }

  public onRegistration() {
    this.router.navigate(['auth', 'registration']).then();
  }
}
