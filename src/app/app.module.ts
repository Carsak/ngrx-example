import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { userReducers } from "../store/user.reducer";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({
      user: userReducers
    }, {})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
