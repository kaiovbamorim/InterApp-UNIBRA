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
  {
    path: 'sugerir-ponto',
    loadComponent: () => import('./sugerir-ponto/sugerir-ponto.page').then( m => m.SugerirPontoPage)
  },
  {
    path: 'alterar-senha',
    loadComponent: () => import('./alterar-senha/alterar-senha.page').then( m => m.AlterarSenhaPage)
  },
  {
    path: 'sugestao-aceita',
    loadComponent: () => import('./sugestao-aceita/sugestao-aceita.page').then( m => m.SugestaoAceitaPage)
  },


];
