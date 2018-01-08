import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NgxD3LiquidFillGaugeModule } from './modules/ngx-d3-liquid-fill-gauge/ngx-d3-liquid-fill-gauge.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxD3LiquidFillGaugeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
