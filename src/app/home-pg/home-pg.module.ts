import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePgPageRoutingModule } from './home-pg-routing.module';

import { HomePgPage } from './home-pg.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePgPageRoutingModule
  ],
  declarations: [HomePgPage]
})
export class HomePgPageModule {}
