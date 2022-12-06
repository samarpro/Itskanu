import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchingPgPage } from './searching-pg.page';

const routes: Routes = [
  {
    path: '',
    component: SearchingPgPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchingPgPageRoutingModule {}
