import { Component, OnInit } from '@angular/core';
import { SlideService } from '../../services/slide.service';
import { ActivatedRoute } from '@angular/router';
import { ISlide } from '../../models/slide.model';

@Component({
  selector: 'app-slide-details',
  templateUrl: './slide-details.component.html',
  styleUrls: ['./slide-details.component.scss']
})
export class SlideDetailsComponent implements OnInit {
  slide:ISlide;

  constructor(private _slideService:SlideService, private _route:ActivatedRoute) { }

  ngOnInit() {
    this.slide = this._slideService.getSlide(+this._route.snapshot.queryParams["id"]);
  }

  saveSlide(){
    console.log(this.slide);
  }
}
