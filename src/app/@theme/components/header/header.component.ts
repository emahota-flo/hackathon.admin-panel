import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  NbDialogService,
  NbMediaBreakpointsService,
  NbMenuService,
  NbSidebarService,
  NbThemeService,
} from '@nebular/theme';
import { map, takeUntil } from 'rxjs/operators';
import { GlbUnsubscribe } from '../../../@core/glb-unsubscribe';
import { LayoutService } from '../../../@core/utils';
import { AuthService } from '../../../auth/auth.service';
import { ModalConfirmComponent } from '../../../shared/components/modal-confirm/modal-confirm.component';
import { User, UserService } from '../../../shared/services/user.service';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'ngx-header',
  styleUrls: ['./header.component.scss'],
  templateUrl: './header.component.html',
})
export class HeaderComponent extends GlbUnsubscribe implements OnInit {

  hideMenuOnClick: boolean = false;
  userPictureOnly: boolean = false;
  user: User;
  currentTheme = localStorage.getItem('theme') || environment.defaultTheme;
  userMenu = [
    { title: 'Профиль' },
    { title: 'Выход' },
  ];

  constructor(private sidebarService: NbSidebarService,
              private menuService: NbMenuService,
              private themeService: NbThemeService,
              private layoutService: LayoutService,
              private authService: AuthService,
              private dialogService: NbDialogService,
              private userService: UserService,
              private breakpointService: NbMediaBreakpointsService,
              private router: Router) {
    super();
  }

  ngOnInit() {
    this.themeService.changeTheme(this.currentTheme);

    this.menuService.onItemClick()
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(action => {
        if (action.item.title === 'Выход') {
          this.logout();
        }
        if (action.item.title === 'Профиль') {
          this.router.navigate(['pages', 'profile']).then();
        }
      });

    this.userService.userSubject
      .pipe(takeUntil(this.unsubscribe))
      .subscribe((user: User) => {
        this.user = user;
      });

    this.hideSidebarOnSmallDisplay();
  }

  public changeTheme(themeName: string) {
    localStorage.setItem('theme', themeName);
    this.themeService.changeTheme(themeName);
  }

  public toggleSidebar(): boolean {
    this.sidebarService.toggle(true, 'menu-sidebar');
    this.layoutService.changeLayoutSize();

    return false;
  }

  public navigateHome() {
    this.menuService.navigateHome();
    return false;
  }

  public logout() {
    this.dialogService.open(ModalConfirmComponent, { context: { text: 'Вы уверены что хотите выйти?' } })
      .onClose.subscribe(action => action ? this.authService.logout() : '');
  }

  private hideSidebarOnSmallDisplay() {
    const { xl } = this.breakpointService.getBreakpointsMap();
    const { is } = this.breakpointService.getBreakpointsMap();
    this.themeService.onMediaQueryChange()
      .pipe(
        map(([, currentBreakpoint]) => currentBreakpoint),
        takeUntil(this.unsubscribe),
      )
      .subscribe(currentBreakpoint => {
        this.userPictureOnly = currentBreakpoint.width < xl;
        this.hideMenuOnClick = currentBreakpoint.width <= is;
      });

    this.menuService.onItemClick().subscribe(() => {
      if (this.hideMenuOnClick) {
        this.sidebarService.collapse('menu-sidebar');
      }
    });
  }
}
