import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListingPgPage } from './listing-pg.page';

const routes: Routes = [
  {
    path: '',
    component: ListingPgPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListingPgPageRoutingModule {}
