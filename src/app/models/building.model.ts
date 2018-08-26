/**
 * Model for the building service to supply / recieve.
*/
export class BuildingModel {
  id?:number; //optional because creating a new building will not have an id
  name:string;
  abbrevation:string;
  imgUrl?:string; //url to a thumbnail image for the thumbnail.
}
