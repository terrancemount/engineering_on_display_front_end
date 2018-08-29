
/**
 * Interface to track how a slide is represented in db and on the site.
 */
export interface ISlide{
  id?:number;
  imgUrl?: string;
  title?: string;
  caption?: string;
  altText?: string;
  redirectUrl?: string;
  displayTime?: number; //in seconds
  enabled?: boolean;
  order?:number;
}