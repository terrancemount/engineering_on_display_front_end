import { Injectable } from '@angular/core';
import { ISensorModel, IYAxisModel } from '../models/sensor.model';

@Injectable({
  providedIn: 'root'
})

/**
 * CRUD service for handeling sensor config data.  Note: this does not handel the sensor-data.
 */
export class SensorService {
  sensors: ISensorModel[];
  constructor() {
    this.loadMockSensors();
  }

  /**
   * Get an arry of all sensors availible.
   */
  getSensors():ISensorModel[]{
   //mock api
   return this.sensors;
  }

  /**
   * get an array of sensors for a building
   * @param buildingId for the building which the array of sensors will be from.
   */
  getSensorsForBuilding(buildingId:number):ISensorModel[]{
    //mock api
    return this.sensors.filter(sensor => sensor.buildingId === buildingId);
  }
  /**
   * Get the model for a particular sensor.
   * @param id for the sensor to be returned.
   */
  getSensor(id:number):ISensorModel{
    //mock api
    return this.sensors.find(sensor => sensor.id === id);
  }

  /**
   * Post a sensor to the api.
   * @param sensor is the ISensorModel for the new sensor.
   */
  postSensor(sensor:ISensorModel):number{
    sensor.id  = 1 + Math.max(...this.sensors.map(s => s.id));
    this.sensors.push(sensor);
    return sensor.id;
  }
  /**
   * Update an existing sensor to the api. Currently it is a replace everything method.
   * @param sensor is the ISensorModel for the new sensor.
   */
  updateSensor(sensor:ISensorModel):number{
    const index = this.sensors.findIndex(s => s.id === sensor.id);
    this.sensors[index] = sensor;
    return sensor.id;
  }

  /**
   * Delete a sensor with given id.
   * @param id of the senor to delete
   */
  deleteSensor(id:number){
    const index = this.sensors.findIndex(s => s.id === id);
    this.sensors.splice(index, 1);
  }

  /**
   * Private method to load a Mock API with data.
   */
  private loadMockSensors() {
    this.sensors = [{
      id: 1,
      buildingId: 1,
      label: 'Electrical Usage kWh',
      borderColor: 'rgb(255, 205, 86)',
      backgroundColor: 'rgb(255, 205, 86)',
      yAxisID: 1,
      iconUrl: '../assets/img/Electrical.png'
    }, {
      id: 2,
      buildingId: 1,
      label: 'Electrical Demand kW',
      borderColor: 'rgb(255,204,153)',
      backgroundColor: 'rgb(255,204,153)',
      yAxisID: 2,
      iconUrl: '../assets/img/Electrical.png'
    }, {
      id: 3,
      buildingId: 1,
      label: 'Natural Gas Usage kBTU',
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgb(255, 99, 132)',
      yAxisID: 3,
      iconUrl: '../assets/img/NaturalGas.png'
    }, {
      id: 4,
      buildingId: 1,
      label: 'Outside Temperature',
      borderColor: 'rgb(201, 203, 207)',
      backgroundColor: 'rgb(201, 203, 207)',
      yAxisID: 5,
      iconUrl: '../assets/img/OutsideTemperature.png'
    }, {
      id: 5,
      buildingId: 2,
      label: 'Electrical Demand kW',
      borderColor: 'rgb(255, 205, 86)',
      backgroundColor: 'rgb(255, 205, 86)',
      yAxisID: 2,
      iconUrl: '../assets/img/Electrical.png'
    }, {
      id: 6,
      buildingId: 2,
      label: 'Electrical Usage kWh',
      borderColor: 'rgb(255, 205, 86)',
      backgroundColor: 'rgb(255, 205, 86)',
      yAxisID: 1,
      iconUrl: '../assets/img/Electrical.png'
    }];
  }
}


