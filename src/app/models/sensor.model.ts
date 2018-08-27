/**
 * Model for the sensor configuration and info.
 * This does not handel anything for the sensor-data
 */
export class ISensorModel{
  id?:number; //sensor id from database, null is possible if createing a new sensor
  buildingId:number;  //building id form database
  label:string; //the label for the titel of the sensor
  borderColor: string; //color of the line or bar border
  backgroundColor: string; //color of the line or bar fill
  yAxisID: number; //id for the yAxis from database
  iconUrl: string; //url of the icon for the button
}

export class IYAxisModel{
  id:number;
  position:string;
  labelString:string;
}
