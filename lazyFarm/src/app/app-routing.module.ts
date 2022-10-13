import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: 'cow',
    loadChildren: () => import('./lazy-cow/lazy-cow.module').then(module => module.LazyCowModule)
  },
  {
    path: 'horse',
    loadChildren: () => import('./horse/horse.module').then(m => m.HorseModule)
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]/*  */
})
export class AppRoutingModule { }
