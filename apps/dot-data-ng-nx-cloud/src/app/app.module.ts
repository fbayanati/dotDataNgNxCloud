import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DotScaleModule } from '@dot-data/dot-scale';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, DotScaleModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
