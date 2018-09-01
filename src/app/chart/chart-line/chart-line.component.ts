import { Component, OnInit, Input, ModuleWithComponentFactories } from '@angular/core';
import { Chart } from '../../../../node_modules/chart.js';
import { SensorDataService } from '../../services/sensor-data.service.js';
import { SensorService } from '../../services/sensor.service.js';
import { YAxisService } from '../../services/y-axis.service.js';
import { ISensorModel } from '../../models/sensor.model.js';
import { ReshapeChartService } from '../../services/reshape-chart.service.js';
import * as moment from 'moment';

@Component({
  selector: 'app-chart-line',
  templateUrl: './chart-line.component.html',
})
export class ChartLineComponent implements OnInit {
  chart;
  config;
  @Input() sensor:ISensorModel;

  constructor(private _sensorDataService:SensorDataService, private _yAxisService:YAxisService, private _reshapeService:ReshapeChartService) {}

  ngOnInit() {
    this.loadDefaultConfig();
    const end = this._sensorDataService.floorTimeFifteenMinutes(Date.now());
    const start = this._sensorDataService.calcStartTimePerNumberOfFifteenMinuteIntervals(end, 672);

    //retreive and a reshaped YAxis for the chart
    const yAxis = this._yAxisService.getYAxis(this.sensor.yAxisID);
    this.config.options.scales.yAxes.push(this._reshapeService.reshapeYAxis(yAxis));

    //reshape and add sensor to config
    this.config.data.datasets.push(this._reshapeService.reshapeSensor(this.sensor));

    //add the lables
    this.config.data.labels = this._sensorDataService.getSensorTime(this.sensor.id, start, end);

    this.config.data.datasets[0].data = this._sensorDataService.getSensorData(this.sensor.id, start, end);

    this.config.options.scales.xAxes[0].ticks.scaleStartValue = this.calcClosest12Hr(start);
    //this.config.data.labels = this._sensorDataService.getSensorTime(this.sensor);
    this.chart = new Chart('canvas', this.config);
  }

  calcClosest12Hr(time:number){
    let dt = new Date(time);
    if(dt.getHours() < 12){
      dt.setHours(12);
    }
    else{
      dt.setHours(0); //set hours to midnight
      dt.setHours(24); //advance one day
    }
    dt.setMinutes(0);
    return dt.getTime();
  }

  loadDefaultConfig() {
    this.config = {
      type: 'line',
      data: {
        labels: [],
        datasets: [],
      },
      options: {
        lineHeight: 1,
        responsive: true,
        hover: {
          mode: 'nearest',
          intersect: true
        },
        stacked: false,
        title: {
          display: true,
          text: 'Test'
        },
        scales: {
          yAxes: [],
          xAxes: [{
            ticks: {
              maxTicksLimit: 10,
              autoSkip : true,
              callback: function(value, index, values) {
                  const dt = new Date(value);
                  return moment(value).format('ddd h:mm a');
              }
            }
          }]
        }
      }
    };
  }
}

// type: 'time',
//             display: true,
//             distribution: 'series',
//             scaleLabel: {
//               display: true,
//               labelString: 'Date & Time',
//               fontStyle: 'bold'
//             },
