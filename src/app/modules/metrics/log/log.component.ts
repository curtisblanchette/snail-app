import { Component, OnInit } from '@angular/core';
import { Log } from '../../../interfaces/log';
import * as moment from 'moment';
import * as _ from 'lodash';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { DataService } from '../../../services/data.service';

@Component({
  selector: 'app-log-card',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.scss'],
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
export class LogComponent implements OnInit {

  private displayedColumns: string[] = ['time', 'method', 'endpoint', 'wellHeight', 'initialClimb', 'nightlySlide', 'fatigue'];
  private dataSource = undefined;
  public isLoading: boolean;

  constructor(
    private dataService: DataService
  ) {

  }

  ngOnInit() {
    this.isLoading = true;
    this.loadLogs();
  }

  loadLogs(): any {
    this.dataService.getAllRequestLogs()
      .subscribe((results: Array<Log>) => {
        this.dataSource = _.forEach(results, (result) => {
          return result.time = moment(result.time).format('MMMM Do h:mma');
        });
        this.isLoading = false;
      });
  }

}
