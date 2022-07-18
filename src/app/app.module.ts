import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminViewComponent } from './_layouts/admin-layout/admin-view/admin-view/admin-view.component';
import { ClientViewComponent } from './_layouts/client-layout/client-view/client-view/client-view.component';
import { NavbarComponent } from './_layouts/client-layout/components/navbar/navbar/navbar.component';
import { FooterComponent } from './_layouts/client-layout/components/footer/footer/footer.component';
import { AdminDashboardComponent } from './Modules/main-modules/admin-Modules/pages/admin-dashboard/admin-dashboard.component';
import { NotFoundComponent } from './_layouts/common-components/404/not-found/not-found.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';

import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    AdminViewComponent,
    ClientViewComponent,
    NavbarComponent,
    FooterComponent,
    AdminDashboardComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    NgxsModule.forRoot(),
    HttpClientModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
