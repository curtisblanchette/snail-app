import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SnailFormComponent } from './components/snail/snail.component';
import { LoginFormComponent } from './components/login/login-form.component';

const routes: Routes = [
  { path: 'login-form', component: LoginFormComponent },
  { path: 'snail', component: SnailFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
