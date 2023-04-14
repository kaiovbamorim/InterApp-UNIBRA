import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: '',
    redirectTo: 'register',
    pathMatch: 'full',
  },
  {
    path: '',
    redirectTo: 'new-password',
    pathMatch: 'full'
  },
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
  },
  {
    path: 'login',
    loadComponent: () => import('./login/login.page').then( m => m.LoginPage)
  },
  {
    path: 'register',
    loadComponent: () => import('./register/register.page').then( m => m.RegisterPage)
  },
  {
    path: 'new-password',
    loadComponent: () => import('./new-password/new-password.page').then( m => m.NewPasswordPage)
  },

];
