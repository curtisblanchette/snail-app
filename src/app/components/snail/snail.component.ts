import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SnailService } from '../../services/snail.service';

@Component({
  selector: 'app-snail-form',
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
    private snailService: SnailService
  ) {
    this.wellHeight = new FormControl('');
    this.result = '';
  }

  ngOnInit() {
  }

  onClickSolve(): any {
    this.snailService.solveProblem(this.wellHeight.value, this.initialClimb.value, this.nightlySlide.value, this.fatigue.value)
      .subscribe((result) => {
        console.log(result.result);
        this.result = result.result;
      });
  }

}
