import { Component, OnInit } from '@angular/core';
import { SlideService } from '../services/slide.service';
import { ISlide } from '../models/slide.model';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss']
})
export class SlideshowComponent implements OnInit {
  slides:ISlide[];

  constructor(private _slideService:SlideService) { }

  ngOnInit() {
    this.loadSlideShow();
  }

  loadSlideShow(){
    this.slides = this._slideService.getSlides();
  }
}
