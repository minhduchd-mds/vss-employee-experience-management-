import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { NewProjectComponent } from './pages/managerment/new-project/new-project.component';
import { AddProductComponent } from './pages/managerment/add-product/add-product.component';
import { SteperComponent } from './pages/managerment/steper/steper.component';
import { FormProjectComponent } from './pages/managerment/form-project/form-project.component';

// @ts-ignore
@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    NgbModule,
    RouterModule,
    AppRoutingModule,
    CollapseModule.forRoot()
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AuthLayoutComponent,
    NewProjectComponent,
    AddProductComponent,
    SteperComponent,
    FormProjectComponent
  ],
  providers: [],
  bootstrap: [AppComponent]

})


export class AppModule {

}

