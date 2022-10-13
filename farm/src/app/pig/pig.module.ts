import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PigComponent } from './pig.component';
import { CowService } from 'src/cow/cow.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PigComponent],
  exports: [PigComponent]

})
export class PigModule { }
