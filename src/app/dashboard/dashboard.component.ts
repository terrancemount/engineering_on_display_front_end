import { Component, OnInit } from '@angular/core';
import { IBuildingModel } from '../models/building.model';
import { BuildingService } from '../services/building.service';
import { SensorDataService } from '../services/sensor-data.service';
import { SensorService } from '../services/sensor.service';
import { ISensorModel } from '../models/sensor.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  building:IBuildingModel;
  sensors:ISensorModel[];
  sensorData = [];
  sensorTime = [10, 20, 30];
  start:number; //start time
  end:number; //end time
  chart;
  config;

  constructor(private _buildingService:BuildingService,
    private _sensorDataService:SensorDataService,
    private _sensorService:SensorService) {}

  ngOnInit() {
    //todo get the id from the route link. Hard coded to EIB
    this.building = this._buildingService.getBuilding(1);
    this.sensors = this._sensorService.getSensorsForBuilding(1);

    this.end = this._sensorDataService.floorTimeFifteenMinutes(Date.now());
    this.start = this._sensorDataService.calcStartTimePerNumberOfFifteenMinuteIntervals(this.end, 10);

    console.log(`start time = ${this.start}, end time = ${this.end}`);

    //go through each of the sensors and push a meaningful label onto the senors.
    this.sensors.forEach(sensor => {
      this.sensorData.push({
        name: sensor.label,
        data: this._sensorDataService.getSensorData(sensor.id, this.start, this.end)
      });
    });

      this.sensorTime = this._sensorDataService.getSensorTime(1, this.start, this.end);


  }



}
/**
 * Default chart config for the chart.js.
 * Config property above gets set to this object and it controls the look of the chart.
 */
const DEFAULT_CHART_CONFIG = {
  type: 'line',
  data: {
    labels: [],
    datasets: [],
  },
  options: {
    lineHeight: 1,
    responsive: true,
    hover:{
      mode:'nearest',
      intersect:true
    },
    stacked: false,
    title: {
      display: true,
      text: 'Test'
    },
    scales: {
      yAxes:[],
      xAxes:[{
        display: true,
        distribution: 'series',
          scaleLabel: {
              display: true,
              labelString: 'Date & Time',
              fontStyle: 'bold'
          },
          ticks: {
              autoSkip: true,
              maxTicksLimit: 6
          }
      }]
      }
    }
  };

/**
 * Used to reshape the SensorModel into a dataset to be used by Chart.js
 */


/**
 * Used to reshape the YAxisModel model to use with Chart.js.
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
