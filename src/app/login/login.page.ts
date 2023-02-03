import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  //FORMS VARIABLES
  public loginForm!: FormGroup;
  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this._initLoginForm();
  }

  private _initLoginForm() {
    this.loginForm = this._formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }
}
