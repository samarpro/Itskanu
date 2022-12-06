import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'adding-pg',
    loadChildren: () => import('./adding-pg/adding-pg.module').then( m => m.AddingPgPageModule)
  },
  {
    path: 'listing-pg',
    loadChildren: () => import('./listing-pg/listing-pg.module').then( m => m.ListingPgPageModule)
  },
  {
    path: 'searching-pg',
    loadChildren: () => import('./searching-pg/searching-pg.module').then( m => m.SearchingPgPageModule)
  },
  {
    path: 'manipulate-db-pg',
    loadChildren: () => import('./manipulate-db-pg/manipulate-db-pg.module').then( m => m.ManipulateDbPgPageModule)
  },
  {
    path: 'help-pg',
    loadChildren: () => import('./help-pg/help-pg.module').then( m => m.HelpPgPageModule)
  },
  {
    path: 'avai-pg',
    loadChildren: () => import('./avai-pg/avai-pg.module').then( m => m.AvaiPgPageModule)
  },
  {
    path: '',
    loadChildren: () => import('./home-pg/home-pg.module').then(m => m.HomePgPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
