import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyCowComponent } from './lazy-cow.component';
import { LazyCowRoutes } from './lazy-cow.routing';

@NgModule({
  imports: [
    CommonModule,
    LazyCowRoutes
  ],
  declarations: [LazyCowComponent]
})
export class LazyCowModule { }
/*  */