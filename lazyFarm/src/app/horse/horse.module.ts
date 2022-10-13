import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HorseRoutingModule } from './horse-routing.module';
import { HorseComponent } from './horse.component';
import { HorseHeadComponent } from './horse-head/horse-head.component';


@NgModule({
  declarations: [
    HorseComponent,
    HorseHeadComponent
  ],
  imports: [
    CommonModule,
    HorseRoutingModule
  ]
})
export class HorseModule { }
