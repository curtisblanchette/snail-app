import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MetricsRoutingModule } from './metrics-routing.module';
import { MetricsComponent } from './metrics.component';
import { LogComponent } from './log/log.component';
import { MatCardModule, MatProgressSpinnerModule, MatTableModule } from '@angular/material';
import { AverageSuccessComponent } from './average-success/average-success.component';
import { DataService } from '../../services/data.service';
import { ChartModule } from 'angular-highcharts';

@NgModule({
  declarations: [
    MetricsComponent,
    LogComponent,
    AverageSuccessComponent
  ],
  imports: [
    CommonModule,
    MetricsRoutingModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatTableModule,
    ChartModule
  ],
  providers: [
    DataService
  ]
})
export class MetricsModule { }
