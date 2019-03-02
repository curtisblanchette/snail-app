import { Component, OnInit } from '@angular/core';
import { LogService } from '../../services/log.service';
import { Log } from '../../interfaces/log';
import * as moment from 'moment';
import * as _ from 'lodash';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { Animation } from '@angular/animations/browser/src/dsl/animation';

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

  private displayedColumns: string[] = ['method', 'endpoint', 'time', 'wellHeight', 'initialClimb', 'nightlySlide', 'fatigue'];
  private dataSource = undefined;
  private isLoading: boolean;

  constructor(
    private logService: LogService
  ) {

  }

  ngOnInit() {
    this.isLoading = true;
    this.loadLogs();
  }

  loadLogs(): any {
    this.logService.getAllLogs()
      .subscribe((results: Array<Log>) => {
        this.dataSource = _.each(results, (result) => {
          return result.time = moment(result.time).fromNow();
        });
        this.isLoading = false;
      });
  }

}
