import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ISlide } from '../../models/slide.model';


@Component({
  selector: 'app-slide-item',
  templateUrl: './slide-item.component.html',
  styleUrls: ['./slide-item.component.scss']
})
export class SlideItemComponent implements OnInit{
  @Input() item:ISlide;
  @Input() orderMax: number;
  @Output() moveItemEvent = new EventEmitter();//move up or down

  constructor() { }

  ngOnInit() {
  }

  moveItem(dir:direction){
    if(this.item.order > this.orderMax){
      this.moveItemEvent.emit(dir);
    }
  }
}

const enum direction{
  up = -1,
  down = 1
}

