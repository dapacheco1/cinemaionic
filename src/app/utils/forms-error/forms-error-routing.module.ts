import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormsErrorPage } from './forms-error.page';

const routes: Routes = [
  {
    path: '',
    component: FormsErrorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormsErrorPageRoutingModule {}
