import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ClipboardModule } from 'ngx-clipboard';
import { AdminLayoutRoutes } from './admin-layout.routing';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/tables/tables.component';
// import {MatTabsModule} from '@angular/material/tabs';
import {MatIconModule} from '@angular/material/icon';
import {NavBasicComponent} from '../../components/tab/nav-basic.component';
import {BrowserModule} from '@angular/platform-browser';
import {Step} from '../../components/step/step';
import { ProjectComponent } from '../../pages/project/project.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    HttpClientModule,
    NgbModule,
    ClipboardModule,
    MatIconModule
  ],
    declarations: [
        DashboardComponent,
        NavBasicComponent,
        Step,
        ProjectComponent
    ],
  exports: [NavBasicComponent],
  bootstrap: [NavBasicComponent]
})

export class AdminLayoutModule {}

