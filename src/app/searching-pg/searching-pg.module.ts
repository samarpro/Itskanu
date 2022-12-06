import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchingPgPageRoutingModule } from './searching-pg-routing.module';

import { SearchingPgPage } from './searching-pg.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchingPgPageRoutingModule
  ],
  declarations: [SearchingPgPage]
})
export class SearchingPgPageModule {}
