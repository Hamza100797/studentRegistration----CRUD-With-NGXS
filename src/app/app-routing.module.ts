import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminViewComponent } from './_layouts/admin-layout/admin-view/admin-view/admin-view.component';
import { ClientViewComponent } from './_layouts/client-layout/client-view/client-view/client-view.component';
import { NotFoundComponent } from './_layouts/common-components/404/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    component: ClientViewComponent,
    children: [
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full',
      },
      {
        path: '',
        loadChildren: () =>
          import(
            './Modules/main-modules/client-Modules/client/client.module'
          ).then((m) => m.ClientModule), //as admin is in lazyload so we cant register this admin module inside app module,if we do so its load on firstcall of page & real funcationlity of lazyloading is distrubed.....
      },
    ],
  },
  {
    path: '',
    component: AdminViewComponent,
    children: [
      {
        path: '',
        redirectTo: '/admin',
        pathMatch: 'full',
      },
      {
        path: '',
        loadChildren: () =>
          import(
            './Modules/main-modules/admin-Modules/admin/admin.module'
          ).then((m) => m.AdminModule), //as admin is in lazyload so we cant register this admin module inside app module,if we do so its load on firstcall of page & real funcationlity of lazyloading is distrubed.....
      },
    ],
  },

  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
