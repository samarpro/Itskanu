import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HelpPgPageRoutingModule } from './help-pg-routing.module';

import { HelpPgPage } from './help-pg.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HelpPgPageRoutingModule
  ],
  declarations: [HelpPgPage]
})
export class HelpPgPageModule {}
