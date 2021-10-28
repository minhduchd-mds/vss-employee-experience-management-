import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import {ProjectComponent} from '../../pages/managerment/project/project.component';
import {UserMComponent} from '../../pages/managerment/user-m/user-m.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'project',   component: ProjectComponent },
    { path: 'user-m',   component: UserMComponent }
];
