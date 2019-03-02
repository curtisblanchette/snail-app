import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SnailService } from '../../services/snail.service';

@Component({
  selector: 'app-snail-form',
  templateUrl: './snail.component.html',
  styleUrls: ['./snail.component.scss']
})
export class SnailFormComponent implements OnInit {

  wellHeight = new FormControl('');
  initialClimb = new FormControl('');
  nightlySlide = new FormControl('');
  fatigue = new FormControl('');

  constructor(
    private snailService: SnailService
  ) {

  }

  ngOnInit() {
  }

  solveProblem(): any {
    this.snailService.solveProblem(this.wellHeight.value, this.initialClimb.value, this.nightlySlide.value, this.fatigue.value)
      .subscribe((result) => {
        console.log(result);
    });
  }

}
