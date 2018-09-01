import { Component, OnInit } from '@angular/core';
import { IBuildingModel } from '../models/building.model';
import { BuildingService } from '../services/building.service';
import { SensorService } from '../services/sensor.service';
import { ISensorModel } from '../models/sensor.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  building:IBuildingModel;
  sensors:ISensorModel[] = [];

  constructor(private _buildingService:BuildingService,
    private _sensorService:SensorService,
    private _route:ActivatedRoute) {}

  ngOnInit() {
    const building_id = +this._route.snapshot.queryParams["id"];
    this.building = this._buildingService.getBuilding(building_id);
    this.sensors.push(this._sensorService.getSensor(2));
  }
}



