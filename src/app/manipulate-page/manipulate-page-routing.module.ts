import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManipulatePagePage } from './manipulate-page.page';

const routes: Routes = [
  {
    path: '',
    component: ManipulatePagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManipulatePagePageRoutingModule {}
