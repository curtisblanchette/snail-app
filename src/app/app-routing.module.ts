import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SnailFormComponent } from './components/snail/snail.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'snail', component: SnailFormComponent },
  { path: 'metrics', loadChildren: './modules/metrics/metrics.module#MetricsModule'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
