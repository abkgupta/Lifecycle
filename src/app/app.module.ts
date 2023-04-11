import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IntervalcComponent } from './intervalc/intervalc.component';
import { ComchComponent } from './comch/comch.component';

@NgModule({
  declarations: [
    AppComponent,
    IntervalcComponent,
    ComchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
