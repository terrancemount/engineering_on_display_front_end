import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BuildingService {

  constructor() { }


  getBuildings(){
    return DEFAULT_BUILDINGS;
  }
}
const DEFAULT_BUILDINGS = [{
  id: 1,
  fullName: "Engineering and Industry Building",
  shortName: "EIB",
  iconPath:'../assets/img/EIB-small.jpg'
},{
  id: 2,
  fullName: 'Eugene Short Hall',
  shortName: "ESH",
  iconPath: "../asset/img/EIB-small.jpg"
}]
