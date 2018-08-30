import { Component, OnInit, DoCheck } from '@angular/core';
import { SlideService } from '../../services/slide.service';
import { ISlide } from '../../models/slide.model';

@Component({
  selector: 'app-slide-list',
  templateUrl: './slide-list.component.html',
  styleUrls: ['./slide-list.component.scss']
})
export class SlideListComponent implements OnInit, DoCheck {
  slides:ISlide[];
  isDirty: boolean = false;

  constructor(private _slideService:SlideService) { }

  ngOnInit() {
    let temp = this._slideService.getSlides();
    if(temp){
      this.slides = temp;
    }
    this.slides.sort((a, b)=> {return a.order - b.order});
  }
  /**
   * Checks if the slides array has changed and updated the list
   */
  ngDoCheck(){

  }
  /**
   * Moves the slide up in the slide order and resorting resorting.
   * This uses swapItem to help get this done.
   * @param id of the slide to move up.
   */
  moveItemUp(id:number):void{
    const index = this.slides.findIndex(x => x.id === id);
    if(index !== undefined && index > 0){
      this.swapItems(this.slides[index - 1], this.slides[index]);
    }
  }
  /**
   * Moves the slide down in the slide order then resorting.
   * This uses swapItem to help get this done.
   * @param id of the slide to move down.
   */
  moveItemDown(id:number):void{
    const index = this.slides.findIndex(x => x.id === id);
    console.log(`move down id = ${id} order = ${this.slides[index].order} index = ${index} slides.length = ${this.slides.length}`)
    if(index !== undefined && index < this.slides.length - 1){
      this.swapItems(this.slides[index], this.slides[index + 1]);
    }
  }

  /**
   * Swaps the two slides. Note no error checing order increments or decrements.
   * @param plusItem is slide going down in order.
   * @param minusItem is slide going up in order.
   */
  private swapItems(plusItem:ISlide, minusItem:ISlide){
    plusItem.order++;
    plusItem.isDirty = true;
    minusItem.order--;
    minusItem.isDirty = true;
    this.slides.sort((a, b)=> {return a.order - b.order});
    this.isDirty = true;
  }

  trackSlideFn(index, item){
    return item.id;
  }
}
