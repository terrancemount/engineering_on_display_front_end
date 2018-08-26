/**
 * Model for the sensor configuration and info.
 * This does not handel anything for the sensor-data
 */
export class SensorModel{
  id?:number; //sensor id from database, null is possible if createing a new sensor
  buildingId:number;  //building id form database
  label:string; //the label for the titel of the sensor
  borderColor: string; //color of the line or bar border
  backgroundColor: string; //color of the line or bar fill
  yAxisID: number; //id for the yAxis from database
  iconUrl: string; //url of the icon for the button
}

export class YAxisModel{
  id:number;
  position:string;
  labelString:string;
}

export class SensorGenerator{



}

const DEFAULT_SENSORS  =
  [{
    id: 1,
    buildingId: 1,
    label: 'Electrical Demand',
    borderColor: 'rgb(255, 205, 86)',
    backgroundColor:'rgb(255, 205, 86)',
    minDataValue: 50,
    maxDataValue: 100,
    fill: false,
    yAxisID: 1,
    iconPath: '../assets/img/Electrical.png'
  }, {
    id: 2,
    buildingId: 1,
    label: 'Natural Gas Demand',
    borderColor: 'rgb(255, 99, 132)',
    backgroundColor:'rgb(255, 99, 132)',
    minDataValue: 200,
    maxDataValue: 300,
    fill: false,
    yAxisID: 2,
    iconPath: '../assets/img/NaturalGas.png'
  }, {
    id: 3,
    buildingId: 1,
    label: 'Outside Temperature',
    borderColor: 'rgb(201, 203, 207)',
    backgroundColor:'rgb(201, 203, 207)',
    minDataValue: 50,
    maxDataValue: 70,

    fill: false,
    yAxisID: 3,
    iconPath: '../assets/img/OutsideTemperature.png'
  }, {
    id: 4,
    buildingId: 2,
    label: 'Electrical Demand',
    borderColor: 'rgb(255, 205, 86)',
    backgroundColor:'rgb(255, 205, 86)',
    minDataValue: 25,
    maxDataValue: 75,
    units: 'kW',
    fill: false,
    yAxisID: 1,
    iconPath: '../assets/img/Electrical.png'
  }
];

const DEFAULT_Y_AXES = [
  {
    id: 1,
    position: 'left',
    labelString: 'Electrical Usage kWh'
  }, {
    id: 2,
    position: 'left',
    labelString: 'Electrical Usage kWh'
  }, {
    id: 3,
    position: 'left',
    labelString: 'Natural Gas Demand kBTU'
  }, {
    id: 3,
    position: 'left',
    labelString: 'Natural Gas Demand kBTU'
  }, {
    id: 4,
    position: 'left',
    labelString: 'Outside Temperature &#176;F'
  }
];
