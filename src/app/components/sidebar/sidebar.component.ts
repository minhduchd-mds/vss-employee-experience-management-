import {Component, ModuleWithProviders, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationEnd, NavigationStart, Router, RouterModule} from '@angular/router';

class Submenu {
  path: string;
  title: string;
  icon: string;
  class: string;
}

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
    children?: Submenu[];
}
export const ROUTES: RouteInfo [] = [
    { path: 'underlie', title: 'Thông tin nhân sự',  icon: 'icon-profile text-pink', class: 'submenu',
      children: [
        {
          path: '/dashboard', title: 'Sơ yếu lý lịch',  icon: 'ni-single-02 text-pink', class: 'active'
        },
        {
          path: '/ds-skill', title: 'Kỹ năng',  icon: 'ni-single-02 text-pink', class: ''
        },
        {
          path: '/', title: 'Dự án',  icon: 'ni-single-02 text-pink', class: ''
        }
      ]
    },
  { path: '/user-m', title: 'Quản lý nhân sự',  icon: 'icon-user text-pink', class: ''},
  { path: '/project', title: 'Quản lý dự án',  icon: 'icon-project  text-pink', class: ''}
];
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public menuItems: any[];
  public isCollapsed = true;
  constructor(private router: Router,  private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    // this.menuItems.menuItems = ROUTES.filter(menuItem => menuItem.children);
    this.router.events.subscribe((event) => {
      this.isCollapsed = true;
      if (event instanceof NavigationStart) {
      }
    });
  }
  isMobileMenu() {
    return window.innerWidth <= 991;
  }
}
