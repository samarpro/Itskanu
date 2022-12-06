import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManipulateDbPgPage } from './manipulate-db-pg.page';

const routes: Routes = [
  {
    path: '',
    component: ManipulateDbPgPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManipulateDbPgPageRoutingModule {}
