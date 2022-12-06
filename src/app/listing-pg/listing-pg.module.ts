import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListingPgPageRoutingModule } from './listing-pg-routing.module';

import { ListingPgPage } from './listing-pg.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListingPgPageRoutingModule
  ],
  declarations: [ListingPgPage]
})
export class ListingPgPageModule {}
