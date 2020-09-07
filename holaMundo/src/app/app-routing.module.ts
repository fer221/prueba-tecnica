import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';

import { from } from 'rxjs';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', redirectTo:'/login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
