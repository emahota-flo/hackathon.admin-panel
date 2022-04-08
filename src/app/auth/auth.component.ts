import { Component, OnInit } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { environment } from '../../environments/environment';

@Component({
  selector: 'ngx-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {

  currentTheme = localStorage.getItem('theme') || environment.defaultTheme;

  constructor(private themeService: NbThemeService) {
  }

  ngOnInit(): void {
    this.themeService.changeTheme(this.currentTheme);
  }

}
