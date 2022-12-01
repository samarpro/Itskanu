import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ManipulatePagePageRoutingModule } from './manipulate-page-routing.module';

import { ManipulatePagePage } from './manipulate-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ManipulatePagePageRoutingModule
  ],
  declarations: [ManipulatePagePage]
})
export class ManipulatePagePageModule {}
