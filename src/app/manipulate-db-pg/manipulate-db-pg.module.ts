import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ManipulateDbPgPageRoutingModule } from './manipulate-db-pg-routing.module';

import { ManipulateDbPgPage } from './manipulate-db-pg.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ManipulateDbPgPageRoutingModule
  ],
  declarations: [ManipulateDbPgPage]
})
export class ManipulateDbPgPageModule {}
