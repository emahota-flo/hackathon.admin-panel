import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {

  tabs = [
    {
      title: 'Подписки',
      route: 'subscriptions',
      icon: 'credit-card-outline',
      responsive: true, // hide title before `route-tabs-icon-only-max-width` value
    },
    {
      title: 'Учетные данные',
      route: 'edit',
      icon: 'person-outline',
      responsive: true, // hide title before `route-tabs-icon-only-max-width` value
    },
  ];

  constructor() {
  }

  ngOnInit(): void {

  }
}
