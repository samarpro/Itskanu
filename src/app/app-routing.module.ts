import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'listing-page',
    loadChildren: () => import('./listing-page/listing-page.module').then( m => m.ListingPagePageModule)
  },
  {
    path: 'manipulate-page',
    loadChildren: () => import('./manipulate-page/manipulate-page.module').then( m => m.ManipulatePagePageModule)
  },
  {
    path: 'search-page',
    loadChildren: () => import('./search-page/search-page.module').then( m => m.SearchPagePageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
