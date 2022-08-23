import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  { path: 'main', loadChildren: () => import('../app/pages/main/main.module').then(m => m.MainModule) }, 
  { path: 'login', loadChildren: () => import('./login-page/login/login.module').then(m => m.LoginModule) }, 
  { path: 'inro', loadChildren: () => import('./pages/inro/inro.module').then(m => m.InroModule) },
  { path: 'SignUp', loadChildren: () => import('./pages/sign-up/sign-up.module').then(m => m.SignUpModule) }];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
