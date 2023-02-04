import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { LoginService } from '../services/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  //FORMS VARIABLES
  public loginForm!: FormGroup;
  //UI VARIABLES
  public isNotAllowedToSignInUsername:boolean = true;
  public isNotAllowedToSignInPassword:boolean = true;
  constructor(private _formBuilder: FormBuilder,private _router:Router,private _authService:LoginService,
    private _alertController:AlertController) {}

  ngOnInit() {
    this._initLoginForm();
  }

  public initSession(){
    this._authService.signInValidation({
      email: this.loginForm.value.username,
      password: this.loginForm.value.password,
    })
    .subscribe({
      next:(value)=>{
        this.isNotAllowedToSignInUsername = true;
        this._launchAlert({header:'Exito',subHeader:'',message:'message',buttons:['Aceptar']});
      },
      error:()=>{
        this._launchAlert({header:'Error',subHeader:'Inicio de Sesion',message:'Las credenciales ingresadas son incorrectas',buttons:['Ok']});
      }
    });
    //this._router.navigateByUrl('/folder/Inbox');
  }

  private async _launchAlert(alertConfiguration:{header:string,subHeader:string,message:string,buttons:string[]}){
    const alert = await this._alertController.create(alertConfiguration);
    await alert.present();
  }

  private _initLoginForm() {
    this.loginForm = this._formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
    this.loginForm.get('username')?.valueChanges.subscribe({
      next:(inputUsername)=>{
        inputUsername == ''?this.isNotAllowedToSignInUsername = true:this.isNotAllowedToSignInUsername=false;
      }
    });
    this.loginForm.get('password')?.valueChanges.subscribe({
      next:(inputPassword)=>{
        inputPassword == ''?this.isNotAllowedToSignInPassword = true:this.isNotAllowedToSignInPassword=false;
      }
    });
  }
}
