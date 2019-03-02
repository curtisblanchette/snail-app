import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SnailService } from '../../services/snail.service';

@Component({
  selector: 'app-snail-form',
  templateUrl: './snail.component.html',
  styleUrls: ['./snail.component.scss']
})
export class SnailFormComponent implements OnInit {

  private wellHeight = new FormControl('');
  private initialClimb = new FormControl('');
  private nightlySlide = new FormControl('');
  private fatigue = new FormControl('');
  private result = [];

  constructor(
    private snailService: SnailService
  ) {
    this.result = null;
  }

  ngOnInit() {
  }

  solveProblem(): any {
    this.snailService.solveProblem(this.wellHeight.value, this.initialClimb.value, this.nightlySlide.value, this.fatigue.value)
      .subscribe((result) => {
        this.result = result;
      });
  }

}
