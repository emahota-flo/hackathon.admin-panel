import { Component } from '@angular/core';

@Component({
  selector: 'ngx-footer',
  styleUrls: ['./footer.component.scss'],
  template: `
    <span class="created-by">
      Создано с любовь от <b><a class="text-warning" href="https://www.flo.team/" target="_blank">FLO</a></b>, 2022
    </span>
    <div class="socials">
    </div>
  `,
})
export class FooterComponent {
}
