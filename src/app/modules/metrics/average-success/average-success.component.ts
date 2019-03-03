import { Component, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { DataService } from '../../../services/data.service';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-average-success-card',
  templateUrl: './average-success.component.html',
  styleUrls: ['./average-success.component.scss'],
  animations: [
    trigger('enterTrigger',  [
      state('fadeIn', style({
        opacity: '1'
      })),
      transition('void => *', [style({opacity: '0'}), animate('250ms ease-in-out')]),
      transition('* => void', [style({opacity: '0'}), animate('250ms 250ms ease-in-out')])
    ]),
  ]
})
export class AverageSuccessComponent implements OnInit {

  private chart = new Chart({
    chart: {
      type: 'bar',
      height: 200,
    },
    title: {
      text: '',
      style: { display: 'none' }
    },
    credits: {
      enabled: false
    },
    series: [
    ]
  });

  private isLoading: boolean;
  private averageDistanceClimbed: number;

  constructor(
    private dataService: DataService
  ) {
    this.averageDistanceClimbed = 10; // TODO get real data
  }

  ngOnInit() {
    this.isLoading = true;
    this.loadAverageSuccessRate();
  }

  loadAverageSuccessRate(): any {
    this.dataService.getAverageSuccessRate()
      .subscribe((results: any) => {

      this.chart.addSeries({
        name: 'Success',
        data: [results.successRate.success],
        type: null
      }, true, true);

      this.chart.addSeries({
        name: 'Failure',
        data: [results.successRate.failure],
        type: null
      }, true, true);

      this.isLoading = false;
    });
  }

}
