import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddingPgPageRoutingModule } from './adding-pg-routing.module';

import { AddingPgPage } from './adding-pg.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddingPgPageRoutingModule
  ],
  declarations: [AddingPgPage]
})
export class AddingPgPageModule {}
