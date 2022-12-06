import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HelpPgPage } from './help-pg.page';

const routes: Routes = [
  {
    path: '',
    component: HelpPgPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HelpPgPageRoutingModule {}
