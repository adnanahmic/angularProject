import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from '../guard/auth.guard';
import { roleGuard } from '../guard/role.guard';
import { AccessGuard } from '../guard/access.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full',
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('../module/auth/auth.module').then((m) => m.AuthModule),
      canActivate:[AccessGuard]
  },
  {
    path: 'dashboard',
    loadChildren: () =>
    import('../module/dashboard/dashboard.module').then((m) => m.DashboardModule),
    canActivate: [authGuard],
  },
  {
    path: 'products',
    loadChildren: () =>
    import('../module/product/product.module').then((m) => m.ProductModule),
    canActivate: [authGuard],
  },
  {
    path: 'addNewPost',
    loadChildren: () =>
      import('../module/addNewPost/add-new.module').then((m) => m.AddNewModule),
    canActivate: [authGuard],
  },
  {
    path: 'license/:id',
    loadChildren: () =>
      import('../module/license/license.module').then((m) => m.LicenseModule),
    canActivate: [roleGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
