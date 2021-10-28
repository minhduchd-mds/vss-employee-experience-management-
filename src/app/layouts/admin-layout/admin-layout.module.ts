import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ClipboardModule } from 'ngx-clipboard';
import { AdminLayoutRoutes } from './admin-layout.routing';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import {UserMComponent} from '../../pages/managerment/user-m/user-m.component';
import {MatIconModule} from '@angular/material/icon';
import {NavBasicComponent} from '../../components/tab/nav-basic.component';
import {BrowserModule} from '@angular/platform-browser';
import {Step} from '../../components/step/step';
import { ProjectComponent } from '../../pages/managerment/project/project.component';

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
        ProjectComponent,
        UserMComponent
    ],
  exports: [NavBasicComponent],
  bootstrap: [NavBasicComponent]
})

export class AdminLayoutModule {}

