import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SensorDataService {

  constructor() { }

  /**
   * Gets the array of sensor values for the given time frame.
   * @param sensorId of the sensor to return times.
   * @param start is the earliest time in milliseconds.
   * @param end is the lastest time in milliseconds.
   * @returns array of time in milliseconds.
   */
   getSensorData(sensorId:number, start:number, end:number):number[]{
    //floor the times to the nearest 15 minutes
    start = this.floorTimeFifteenMinutes(start);
    end = this.floorTimeFifteenMinutes(end);

    const config = mockSensorConfig.find(s => s.id === sensorId);
    let count = this.getNumberIntervals(start, end);
    let numberArray = [];
    let base = config.base;

    for(let i = 0; i <= count; i++){
      base += Math.floor(Math.random()*(config.maxGrow - config.minGrow)) + config.minGrow;
      numberArray.push(base);
    }

    return numberArray;
  }

  /**
   * Gets the array of sensor times in milliseconds.
   * @param sensorId of the sensor to return times.
   * @param start is the earliest time in milliseconds.
   * @param end is the lastest time in milliseconds.
   * @returns array of time in milliseconds.
   */
  getSensorTime(sensorId:number, start:number, end:number):number[]{
    const MS_PER_FIFTEEN_MINUTES = 15* 60 * 1000;

    let count = this.getNumberIntervals(start, end);
    let timeArray = [];
    let i;

    //loop for the number of intervals given
    for(i = 0; i <= count; i++){
      timeArray.push(start + (i * MS_PER_FIFTEEN_MINUTES));
    }
    return timeArray;
  }

  /**
   * Return the last Date which is less than or equal to the Date.  H:00, H:15, H:30, H:45
   * @param time is the time in milliseconds which will have the time floored to the last 15 min.
   */
  floorTimeFifteenMinutes(time:number):number{
    let dt = new Date(time);
    let minutes = Math.floor(dt.getMinutes()/15) * 15;
    dt.setMinutes(minutes);
    dt.setSeconds(0);
    dt.setMilliseconds(0);
    return dt.getTime();
  }
  /**
   * Calculate a start time given a time parameter and number of intervals.
   * Assumes to always be given the ending time to calculate the start.
   * @param time to end the time intevals at.
   * @param intervals. number of fifteen minute intervals.
   * @returns the eariler time before intervals  (return < time)
   */
  calcStartTimePerNumberOfFifteenMinuteIntervals(time:number, intervals:number):number{
    const MS_PER_FIFTEEN_MINUTES = 15* 60 * 1000;
    return time - intervals * MS_PER_FIFTEEN_MINUTES;
  }

  /**
   * Get the number of time intervals in a given time frame from start to end.
   * @param interval time in minutes.
   * @param start date of the time intervals. Earliest date.
   * @param end date of the time intervals.  Latest date.
   */
  getNumberIntervals(start:number, end:number):number{
    let minutes = (end - start) / 1000 / 60;
    return Math.ceil(minutes / 15);
  }
}
const mockSensorConfig = [{
    id:1,
    minGrow: 30,
    maxGrow: 50,
    base: 2000
  },{
    id: 2,
    minGrow: -5,
    maxGrow: 5,
    base: 100
  },{
    id: 3,
    minGrow: 85,
    maxGrow: 100,
    base: 3050
  },{
    id: 4,
    minGrow: -5,
    maxGrow: 10,
    base: 60
  },{
    id:5,
    minGrow: 30,
    maxGrow: 50,
    base: 2000
  },{
    id: 6,
    minGrow: -5,
    maxGrow: 5,
    base: 100
  }
];

