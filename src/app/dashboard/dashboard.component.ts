import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  buildingName: string = 'Engineering and Industry Building';
  buildingImgUrl: string = '/assets/img/EIB-small.jpg';
  buildingImgAltText: string = 'EIB building exterior';
  
  constructor() { }

  ngOnInit() {

  }

}
