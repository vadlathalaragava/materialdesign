import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private snackBar: MatSnackBar) {}

  openSnackBar(message: 'string', action: string) {
    this.snackBar.open('login failed', action, {
      duration: 5000,
    });
  }

  ngOnInit() {
  }

}
