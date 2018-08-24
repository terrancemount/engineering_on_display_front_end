import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { DashboardComponent } from './dashboard/dashboard.component';




@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    DashboardComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
