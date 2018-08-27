/**
 * Model for the building service to supply / recieve.
*/
export interface IBuildingModel {
  id?:number; //optional because creating a new building will not have an id
  name:string; //full name of building
  abbrevation:string; //normal abbrevation of building
  imgUrl?:string; //url to a thumbnail image for the thumbnail.
}
