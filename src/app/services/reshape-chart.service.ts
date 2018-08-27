import { Injectable } from '@angular/core';
import { IYAxisModel, ISensorModel } from '../models/sensor.model';

@Injectable({
  providedIn: 'root'
})
/**
 * Reshapes API data to an object consumed by Chart.js.
 * This service just removes some of the code from the dashboard.
 */
export class ReshapeChartService {

  constructor() { }

  /**
   * Reshapes a ISensor from the API to a chart.js dataset.
   * @param sensor to be reshaped
   */
  reshapeSensor(sensor: ISensorModel) {
    let newDataset = DEFAULT_SENSOR;
    newDataset.id = sensor.id;
    newDataset.label = sensor.label;
    newDataset.backgroundColor = sensor.backgroundColor;
    newDataset.borderColor = sensor.borderColor;
    newDataset.yAxisID = sensor.yAxisID;
    return newDataset;
  }

  /**
   * Reshapes an array of ISensors using the reshapeSensor method.
   * @param sensors is an array of sensors.
   */
  reshapeSensors(sensors: ISensorModel[]) {
    return sensors.map(sensor => this.reshapeSensor(sensor));
  }

  /**
   * Reshape the IYAxisModel from the API to a chart.js yAxis object.
   * @param yAxis to be reshaped.
   */
  reshapeYAxis(yAxis: IYAxisModel) {
    let newYAxis = DEFAULT_Y_AXIS;
    newYAxis.id = yAxis.id;
    newYAxis.position = yAxis.position;
    newYAxis.scaleLabel.labelString = yAxis.labelString;
    return newYAxis;
  }

  /**
   * Reshape an array of IYAxis using the reshapeYAxis method.
   * @param yAxes is an array of yAxis.
   */
  reshapeYAxes(yAxes: IYAxisModel[]) {
    return yAxes.map(axis => this.reshapeYAxis(axis));
  }
}

/**
 * Holds the default shape of the sensor to dataset reshape.
 */
const DEFAULT_SENSOR = {
  id: 1,
  data: [],
  label: 'Default Label',
  borderColor: 'rgb(0, 0, 0)',
  backgroundColor: 'rgb(0, 0, 0)',
  fill: false,
  yAxisID: 0,
};

/**
 * Holds the yaxis reshape.
 */
const DEFAULT_Y_AXIS =
{
  id: 0,
  display: true,
  position: 'left',

  scaleLabel: {
    display: true,
    labelString: 'Default YAxis Lable'
  },

  gridLines: {
    drawOnChartArea: false,
  }
};
