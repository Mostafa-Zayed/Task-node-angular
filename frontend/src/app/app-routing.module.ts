import { SignupComponent } from './views/auth/signup/signup.component';
import { SigninComponent } from './views/auth/signin/signin.component';
import { HomeComponent } from './views/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '' ,
    component: HomeComponent
  },
  {
    path: '/users/auth/sigin',
    component: SigninComponent
  },
  {
    path: '/users/auth/sigup',
    component: SignupComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
