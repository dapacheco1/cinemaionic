import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormsErrorPageRoutingModule } from './forms-error-routing.module';

import { FormsErrorPage } from './forms-error.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormsErrorPageRoutingModule
  ],
  declarations: [FormsErrorPage],
  exports:[FormsErrorPage]
})
export class FormsErrorPageModule {}
