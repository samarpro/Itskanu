import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AvaiPgPageRoutingModule } from './avai-pg-routing.module';

import { AvaiPgPage } from './avai-pg.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AvaiPgPageRoutingModule
  ],
  declarations: [AvaiPgPage]
})
export class AvaiPgPageModule {}
