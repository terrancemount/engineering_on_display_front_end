import { Component, OnInit, DoCheck } from '@angular/core';
import { SlideService } from '../../services/slide.service';
import { ISlide } from '../../models/slide.model';

@Component({
  selector: 'app-slide-list',
  templateUrl: './slide-list.component.html',
  styleUrls: ['./slide-list.component.scss'],
})
export class SlideListComponent implements OnInit {
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
   * Deletes a slide from the array of slides and send a delete request to the server.
   * @param id of the slide to delete
   */
  deleteSlide(id:number){
    //check if user wants to save before deleting.
    if(this.isDirty){
      if(confirm("Do you want to save changes to slides before deleting.  Unsaved changes might be lost.")){
        this.save();
      }
    }
    //check to make sure the user wants to delete
    if(confirm("Are you sure you want to delete this slide?")){

      //attempt to delete slide
      const result = this._slideService.deleteslide(id);

      //check if API returned that it deleted slide
      if(result){ //== true
        //delete from array if API deleted.
        const index = this.slides.findIndex(x => x.id === id);
        //this.slides.splice(index, 1);
      } else { //error occured
        alert("Unable to delete slide.  Slide doen't exist or unauthorized");
      }
    }
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

  save(){
    let needsUpdate = this.slides.filter(x => x.isDirty);
    console.log(`update slides with id = ${needsUpdate.map(x => x.id)}`);
    needsUpdate.forEach(x => x.isDirty = false);
    this.isDirty = false;
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
