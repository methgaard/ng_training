import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CowComponent } from './cow.component';
import { CowService } from './cow.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CowComponent],
  exports: [CowComponent],
  providers: [CowService]


})
export class CowModule { }
