import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddingPgPage } from './adding-pg.page';

const routes: Routes = [
  {
    path: '',
    component: AddingPgPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddingPgPageRoutingModule {}
