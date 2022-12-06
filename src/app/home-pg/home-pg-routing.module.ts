import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePgPage } from './home-pg.page';

const routes: Routes = [
  {
    path: '',
    component: HomePgPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePgPageRoutingModule {}
