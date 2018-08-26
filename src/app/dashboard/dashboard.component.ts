import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  buildingName: string = 'Engineering and Industry Building';
  buildingImgUrl: string = '/assets/img/EIB-small.jpg';
  buildingImgAltText: string = 'EIB building exterior';

  constructor() { }

  ngOnInit() {

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
const DEFAULT_DATASET = {
  id: 1,
  data:[],
  label: 'Default Label',
  borderColor: 'rgb(0, 0, 0)',
  backgroundColor:'rgb(0, 0, 0)',
  fill: false,
  yAxisID: 0,
};

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
