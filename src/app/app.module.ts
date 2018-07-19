import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { SampleLib1Module } from 'sample-lib1';
import { SampleLib2Module } from 'sample-lib2';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SampleLib1Module,
    SampleLib2Module,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
