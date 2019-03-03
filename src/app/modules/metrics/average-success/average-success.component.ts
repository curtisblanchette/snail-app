import { Component, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { DataService } from '../../../services/data.service';
import { Chart } from 'angular-highcharts';
import { AverageResponse } from '../../../interfaces/average-success-response';

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

  private isLoading: boolean;
  private averageDistanceClimbed: number;
  private displayedColumns: string[] = ['averageDistance', 'averageSuccessDays', 'averageFailureDays'];
  private results: any;
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

  constructor(
    private dataService: DataService
  ) {
    this.averageDistanceClimbed = 10; // TODO get real data
  }

  async ngOnInit() {
    this.isLoading = true;
    this.results = await this.loadAverages();
    console.log('this.resulsts', this.results);
    this.addChartSeries(this.results);
    this.isLoading = false;
  }

  loadAverages(): Promise<AverageResponse> {
    return this.dataService.getAverages().toPromise();
  }

  addChartSeries(data: AverageResponse) {
    this.chart.addSeries({
      name: 'Success',
      data: [data.successRate.success],
      type: null
    }, true, true);
    this.chart.addSeries({
      name: 'Failure',
      data: [data.successRate.failure],
      type: null
    }, true, true);
  }

}
