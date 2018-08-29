import { Component, OnInit } from '@angular/core';
import { SlideService } from '../../services/slide.service';
import { ISlide } from '../../models/slide.model';

@Component({
  selector: 'app-slide-list',
  templateUrl: './slide-list.component.html',
  styleUrls: ['./slide-list.component.scss']
})
export class SlideListComponent implements OnInit {
  slides:ISlide[];

  constructor(private _slideService:SlideService) { }

  ngOnInit() {
    this.slides = this._slideService.getSlides();
  }
  
}
