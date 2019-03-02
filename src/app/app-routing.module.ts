import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SnailFormComponent } from './components/snail/snail.component';

const routes: Routes = [
  { path: 'snail', component: SnailFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
