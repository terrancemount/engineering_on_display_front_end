import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { SlideListComponent } from './slide/slide-list/slide-list.component';



/**
 * list of routes for whole website.
 * Todo: break up routes into feature modules.
 */
const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path:'slide-list', component: SlideListComponent},
  {path:'dashboard', component: DashboardComponent},
  {path:'', redirectTo: 'home', pathMatch: 'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
