import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HorseHeadComponent } from './horse-head/horse-head.component';
import { HorseComponent } from './horse.component';

const routes: Routes = [
  {
    path: '',
    component: HorseComponent,
    children: [{
      path: 'head',
      component: HorseHeadComponent,

    }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HorseRoutingModule { }
