import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  private registrationSuccess = false;
  private authenticated = false;

  private registerForm: FormGroup = new FormGroup({
    username: new FormControl('', [
      Validators.required
    ]),
    password: new FormControl('', [
      Validators.required
    ])
  });

  private loginForm: FormGroup = new FormGroup({
    username: new FormControl('', [
      Validators.required
    ]),
    password: new FormControl('', [
      Validators.required
    ])
  });

  constructor(
    private dataService: DataService
  ) {

  }

  ngOnInit() {

  }

  login() {
    this.dataService.login({
      username: this.loginForm.controls.username.value,
      password: this.loginForm.controls.password.value,
    }).subscribe((results) => {
      this.authenticated = true;
    });
  }

  register() {
    this.dataService.register({
      username: this.registerForm.controls.username.value,
      password: this.registerForm.controls.password.value,
    }).subscribe((results) => {
      this.registrationSuccess = true;
    });
  }

}
