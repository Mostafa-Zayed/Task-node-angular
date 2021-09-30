import { UserService } from './user.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { USER } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private router: Router,
    private userService: UserService 
    ) { }

    // signup function
  signup(data:{name:string,email:string,password:string}) {
    this.http.post('http://localhost:5000/users/auth/signup',data).subscribe(
      data => this.router.navigateByUrl('users/auth/sigin'),
      err=> console.log(err)
      );
  }

  // signin function
  signin(data:{email:string,password:string}) {
    this.http.post<{
      user: USER,
      token: string
    }>('http://localhost:5000/users/auth/singin',data).subscribe(
      data => {
          this.userService.setUser(data.user,data.token);
          this.router.navigateByUrl('/');
        },
      err => console.log(err)
    )
  }

  // logout funciton 
  logout() {
    this.userService.clear();
  }
}
