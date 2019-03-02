import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginFormComponent implements OnInit {
  username = new FormControl('');
  password = new FormControl('');

  constructor() {
  }

  ngOnInit() {
  }

}
