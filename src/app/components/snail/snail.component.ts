import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-snail-card',
  templateUrl: './snail.component.html',
  styleUrls: ['./snail.component.scss']
})
export class SnailFormComponent implements OnInit {

  private result: string = undefined;
  private snailForm: FormGroup = new FormGroup({
    wellHeight: new FormControl('', [
      Validators.required,
      Validators.min(0),
      Validators.max(100),
    ]),
    initialClimb: new FormControl('', [
      Validators.required,
      Validators.min(0),
      Validators.max(100),
    ]),
    nightlySlide: new FormControl('', [
      Validators.required,
      Validators.min(0),
      Validators.max(100),
    ]),
    fatigue: new FormControl('', [
      Validators.required,
      Validators.min(0),
      Validators.max(100),
    ])
  });

  constructor(
    private dataService: DataService
  ) {
    this.result = '';
  }

  ngOnInit() {
  }

  onClickSolve(): any {
    const controls: any = this.snailForm.controls;
    const data = {
      wellHeight: controls.wellHeight.value,
      initialClimb: controls.initialClimb.value,
      nightlySlide: controls.nightlySlide.value,
      fatigue: controls.fatigue.value
    };
    this.dataService.solveProblem(data)
      .subscribe((result) => {
        this.result = result.result;
      });
  }

}
