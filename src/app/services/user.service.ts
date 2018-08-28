import { Injectable } from '@angular/core';
import { IUser } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users:IUser[];
  constructor() {
    this.loadMockUsers();
   }

  /**
   * Get all the users from the API.  Including the Root.
   * @returns an array of users.
   */
  getUsers():IUser[]{
    return this.users;
  }

  /**
   * Get a single user by id.
   * @param id of the requested user.
   * @returns a single instance of IUser.
   */
  getUser(id:number):IUser{
    return this.users.find(u => u.id === id);
  }
  /**
   * Post a user to the API.
   * @param user to be posted to API.
   * @returns the index of the user.
   */
  postUser(user:IUser):number{
    user.id = Math.max(...this.users.map(u => u.id));
    this.users.push(user);
    return user.id;
  }

  /**
   * Updates the user.  Simply replaces whole user with parameter.
   * @param user to be updated.
   * @returns id of the user updated.
   */
  updateUser(user:IUser):number{
    const index = this.users.findIndex(u => u.id === user.id);
    this.users[index] = user;
    return this.users[index].id;
  }

  /**
   * Delete a user from the API.
   * @param id of the user to be deleted.
   * @returns boolean if the user id was found and deleted.
   */
  deleteUser(id:number):boolean{
    const index = this.users.findIndex(u => u.id === id);
    if(index === undefined){
      return false;
    }
    else{
      this.users.splice(index, 1);
      return true;
    }
  }

  /**
   * Private method to mock the API.  Will be replaced for production build.
   */
  private loadMockUsers(){
    this.users = [{
      id: 1,
      username: 'jdoe123',
      password: 'Zxcvb777',
      firstname: 'John',
      lastname: 'Doe',
      role: 'root',
      email: 'jdoe@alaska.edu',
    },{
      id: 2,
      username: 'kmock12',
      password: 'Asdfg777',
      firstname: 'Kenrick',
      lastname: 'Mock',
      role: 'admin',
      email: 'kmock@alaska.edu',
    },{
      id: 2,
      username: 'tmount',
      password: 'Qwert777',
      firstname: 'Terrance',
      lastname: 'Mount',
      role: 'admin',
      email: 'tmount@alaska.edu',
    },{
      id: 2,
      username: 'hhelgeson',
      password: 'Zxcvb111',
      firstname: 'Heather',
      lastname: 'Helgeson',
      role: 'poweruser',
      email: 'hhelgson@alaska.edu',
    },{
      id: 2,
      username: 'troot',
      password: 'Zxcvb222',
      firstname: 'Tank',
      lastname: 'Root',
      role: 'limited',
      email: 'troot@alaska.edu',
    }];
  }

}

