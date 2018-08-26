import { Component, OnInit, DoCheck } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Navigation } from 'selenium-webdriver';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  showNavbar: boolean;
  showSlideShow: boolean;
  showSlideShowPaths = ['/dashboard'];
  hideNavbarPaths = ['/dashboard'];

  constructor(private _router: Router){
    //check the route whenever the user navagates to see if hide and show componets on main page
    _router.events.subscribe(event => {
      if(event instanceof NavigationEnd){
        this.checkRouteForNavbarStatus();
      }
    });
  }

  //looks at the route to see if the nav bar should be shown
  checkRouteForNavbarStatus(){
    //remove the query string
    let url = this._router.url.split("?")[0];

    //check if the url is in the hidden list
    this.showNavbar = !this.hideNavbarPaths.includes(url);
    this.showSlideShow = this.showSlideShowPaths.includes(url);
  }
}
