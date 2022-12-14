import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CowModule } from 'src/cow/cow.module';

import { AppComponent } from './app.component';
import { PigModule } from './pig/pig.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CowModule,
    PigModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
