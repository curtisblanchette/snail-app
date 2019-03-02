import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SnailService } from '../../services/snail.service';

@Component({
  selector: 'app-snail-form',
  templateUrl: './snail.component.html',
  styleUrls: ['./snail.component.scss']
})
export class SnailFormComponent implements OnInit {



  constructor(
    private snailService: SnailService
  ) {

  }

  ngOnInit() {
    this.heroForm = new FormGroup({
      'name': new FormControl(this.hero.name, [
        Validators.required,
        Validators.minLength(4),
        forbiddenNameValidator(/bob/i) // <-- Here's how you pass in the custom validator.
      ]),
      'alterEgo': new FormControl(this.hero.alterEgo),
      'power': new FormControl(this.hero.power, Validators.required)
    });
  }

  solveProblem(): any {
    this.snailService.solveProblem(this.wellHeight.value, this.initialClimb.value, this.nightlySlide.value, this.fatigue.value)
      .subscribe((result) => {
        console.log(result);
    });
  }

}
