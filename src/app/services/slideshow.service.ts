import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SlideshowService {

  constructor() { }

  //get json data of slides with urls and times to do it
  getSlides(){
    //return an array of slide models
  }

  //get json data on a particular slide
  getSlide(slideId:number){
    //return slide model
  }

  postSlide(slideModel){
    //return the id of the new slide
  }

  updateSlide(slideModel){
    //return the id of the updated slide
  }

  deleteSlide(){
    //return boolean if it was deleted
  } 
}
