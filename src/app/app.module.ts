import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { LoginModule } from 'src/app/login/login.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, RouterModule, LoginModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
