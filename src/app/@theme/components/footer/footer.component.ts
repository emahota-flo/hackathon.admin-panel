import { Component } from '@angular/core';

@Component({
  selector: 'ngx-footer',
  styleUrls: ['./footer.component.scss'],
  template: `
    <span class="created-by">
      Создано с любовь by <b><a class="text-warning" href="https://www.flo.team/" target="_blank">FLO</a></b>, 2022
    </span>
    <div class="socials">
      <a href="https://github.com/first-line-outsourcing" target="_blank" class="ion ion-social-github"></a>
    </div>
  `,
})
export class FooterComponent {
}
