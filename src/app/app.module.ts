import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogoComponent } from './logo/logo.component';
import { ClickTravelService } from './services/click-travel.service';
import { HttpClientModule } from '@angular/common/http';
import { BilletsComponent } from './main/billets/billets.component';
import { CommonModule } from '@angular/common';
import { BilletDetailComponent } from './main/billet-detail/billet-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    LogoComponent,
    BilletsComponent,
    BilletDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [
    ClickTravelService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
