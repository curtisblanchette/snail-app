import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-snail-card',
  templateUrl: './snail.component.html',
  styleUrls: ['./snail.component.scss']
})
export class SnailFormComponent implements OnInit {

  private wellHeight: FormControl = new FormControl('');
  private initialClimb: FormControl = new FormControl('');
  private nightlySlide: FormControl = new FormControl('');
  private fatigue: FormControl  = new FormControl('');
  private result: string = undefined;

  constructor(
    private dataService: DataService
  ) {
    this.result = '';
  }

  ngOnInit() {
  }

  onClickSolve(): any {
    const data = {
      wellHeight: this.wellHeight.value,
      initialClimb: this.initialClimb.value,
      nightlySlide: this.nightlySlide.value,
      fatigue: this.fatigue.value
    };
    this.dataService.solveProblem(data)
      .subscribe((result) => {
        this.result = result.result;
      });
  }

}
