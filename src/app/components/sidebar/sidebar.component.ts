import {Component, ModuleWithProviders, OnInit} from '@angular/core';
import {Router, RouterModule} from '@angular/router';

class Submenu {
  path: string;
  title: string;
  icon: string;
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
          path: '/dashboard', title: 'Sơ yếu lý lịch',  icon: 'ni-single-02 text-pink'
        },
        {
          path: '/dashboard', title: 'Kỹ năng',  icon: 'ni-single-02 text-pink'
        },
        {
          path: '/dashboard', title: 'Dự án',  icon: 'ni-single-02 text-pink'
        }
      ]
    },
    { path: '/management/user', title: 'Quản lý nhân sự',  icon: 'ni-user text-info', class: ''},
    { path: '/management/project', title: 'Quản lý dự án',  icon: 'ni-project text-pink', class: ''}
];
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public menuItems: RouteInfo[];
  public isCollapsed = true;
  public isCollapseds = false;
  constructor(private router: Router) { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    this.router.events.subscribe((event) => {
      this.isCollapsed = false;
   });
  }
  isMobileMenu() {
    if ( window.innerWidth > 991) {
      return false;
    }
    return true;
  }
}
