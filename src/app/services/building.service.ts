import { Injectable } from '@angular/core';
import { IBuildingModel } from '../models/building.model';

@Injectable({
  providedIn: 'root'
})
export class BuildingService {
  buildings:IBuildingModel[]; //Used by mock API to store buildings.

  constructor() {
    this.mockBuildings();
  }

  /**
   * Get data on a particular building.
   * @param id of the building being requested.
   */
  getBuilding(id:number):IBuildingModel{
    return this.buildings.find(b => b.id === id);
  }

  /**
   * Get a list of all buildings.
   */
  getBuildings():IBuildingModel[]{
    return this.buildings;
  }

  /**
   * Posts building to the API.
   * @param building model to be posted
   * @returns id of the posted building.
   */
  postBuilding(building:IBuildingModel):number{
    return 0;
  }

  /**
   * Private method for mocking the API until it is complete.
   */
  private mockBuildings(){
    this.buildings = [{
      id: 1,
      name: "Engineering and Industry Building",
      abbrevation: "EIB",
      imgUrl:'../assets/img/EIB-small.jpg'
    },{
      id: 2,
      name: 'Eugene Short Hall',
      abbrevation: "ESH",
      imgUrl: "../asset/img/ShortBuilding.jpg"
    }];
  }
}
