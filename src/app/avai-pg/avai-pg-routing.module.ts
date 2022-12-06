import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AvaiPgPage } from './avai-pg.page';

const routes: Routes = [
  {
    path: '',
    component: AvaiPgPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AvaiPgPageRoutingModule {}
