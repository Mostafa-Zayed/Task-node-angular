
import { Injectable } from '@angular/core';
import { USER } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  // set user in localstorage
  setUser(user:USER,token:string) {
    window.localStorage.setItem('user',JSON.stringify(user));
    window.localStorage.setItem('token',`Bearer ${token}`);
  }

  // get user form storage
  getUser() {
    const user = window.localStorage.getItem('user');
    if (!user) {
      return null;
    }
    return JSON.parse(user);
  }

  // get token form localstorage
  getToken() {
    return window.localStorage.getItem('token');
  }

  // check if user login 
  isLoggin() {
    return !!this.getUser();
  }

  // clear to remove user data and token
  clear() {
    window.localStorage.removeItem('user');
    window.localStorage.removeItem('token');
  }
}
