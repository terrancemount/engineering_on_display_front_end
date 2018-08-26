import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { SlideshowService } from './services/slideshow.service';
import { BuildingService } from './services/building.service';
import { SensorService } from './services/sensor.service';
import { UserService } from './services/user.service';





@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    DashboardComponent,
    HomeComponent,
    SlideshowComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers:[
    SlideshowService,
    BuildingService,
    SensorService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
