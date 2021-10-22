import {Component, ModuleWithProviders, OnInit} from '@angular/core';
import {Router, RouterModule} from '@angular/router';

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
    { path: '', title: 'Thông tin nhân sự',  icon: 'ni-single-02 text-pink', class: 'submenu',
      children: [
        {
          path: '/dashboard', title: 'Sơ yếu lý lịch',  icon: 'ni-single-02 text-pink', class: 'active'
        },
        {
          path: '/', title: 'Kỹ năng',  icon: 'ni-single-02 text-pink', class: ''
        },
        {
          path: '/', title: 'Dự án',  icon: 'ni-single-02 text-pink', class: ''
        }
      ]
    },
    { path: '/management/user', title: 'Quản lý nhân sự',  icon: 'ni-user text-info', class: ''},
    { path: '/project', title: 'Quản lý dự án',  icon: 'ni-books text-pink', class: ''}
];
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public menuItems: any[];
  public isCollapsed = true;
  constructor(private router: Router) { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    this.router.events.subscribe((event) => {
      this.isCollapsed = true;
    });
    // console.log(url));
  }
  isMobileMenu() {
    return window.innerWidth <= 991;
  }
}
