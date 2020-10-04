import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { HomeComponent } from './home/home.component';

import { LoginPageComponent } from './login/login-page/login-page.component';

const routes: Routes = [
  // {
  //   path: 'cursos', component
  // }
  {
    path: 'login',
    component: LoginPageComponent,
  },
  {
    path: '',
    component: HomeComponent,
  },
];
declare module '@angular/core' {
  interface ModuleWithProviders<T = any> {
    ngModule: Type<T>;
    providers?: Provider[];
  }
}

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
