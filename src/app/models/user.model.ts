/**
 * Interface for tracking a user throughout the webapp.
 */
export interface IUser{
  id?:number;
  username?: string;
  password?: string;
  firstname?: string;
  lastname?: string;
  role?: string;
  email?: string;
}
