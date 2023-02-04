import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SignUpPageRoutingModule } from './sign-up-routing.module';

import { SignUpPage } from './sign-up.page';
import { FormsErrorPageModule } from '../utils/forms-error/forms-error.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    SignUpPageRoutingModule,
    FormsErrorPageModule
  ],
  declarations: [SignUpPage],
})
export class SignUpPageModule {}
