import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { SlideService } from './services/slide.service';
import { BuildingService } from './services/building.service';
import { SensorService } from './services/sensor.service';
import { UserService } from './services/user.service';
import { ReshapeChartService } from './services/reshape-chart.service';
import { SlideListComponent } from './slide/slide-list/slide-list.component';
import { SlideItemComponent } from './slide/slide-item/slide-item.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    DashboardComponent,
    HomeComponent,
    SlideshowComponent,
    SlideListComponent,
    SlideItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers:[
    SlideService,
    BuildingService,
    SensorService,
    UserService,
    ReshapeChartService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
