import { Injectable } from '@angular/core';
import { IYAxisModel } from '../models/sensor.model';

@Injectable({
  providedIn: 'root'
})
export class YAxisService {
  yAxes: IYAxisModel[];

  constructor() {
    this.loadMockYAxis();
  }

  /**
   * Get an array of all YAxis configs
   */
  getYAxes(): IYAxisModel[] {
    return this.yAxes;
  }

  /**
   * Get a YAxis
   * @param id of the yAxis to be used with Chart.js
   */
  getYAxis(id:number): IYAxisModel{
    return this.yAxes.find(a => a.id === id);
  }

  /**
   * Post yAxis to the API.
   * @param yAxis is the yAxis to be posted.
   * @return id of the posted yAxis.
   */
  postYAxis(yAxis:IYAxisModel):number{
    yAxis.id  = 1 + Math.max(...this.yAxes.map(s => s.id));
    this.yAxes.push(yAxis);
    return yAxis.id;
  }

  updateYAxis(yAxis:IYAxisModel):number{
    const index = this.yAxes.findIndex(a => a.id === yAxis.id);
    this.yAxes[index] = yAxis;
    return yAxis.id;
  }
  /**
   * Private method to mock a api for the YAxis
   */
  loadMockYAxis() {
    this.yAxes = [{
      id: 1,
      position: 'left',
      labelString: 'Electrical Usage kWh'
    }, {
      id: 2,
      position: 'left',
      labelString: 'Electrical Demand kWh'
    }, {
      id: 3,
      position: 'left',
      labelString: 'Natural Gas Usage kBTUh'
    }, {
      id: 4,
      position: 'left',
      labelString: 'Natural Gas Demand kBTU'
    }, {
      id: 5,
      position: 'right',
      labelString: 'Outside Temperature &#176;F'
    }];
  }
}

