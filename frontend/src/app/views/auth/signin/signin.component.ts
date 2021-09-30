import { UserService } from './../../../services/user.service';
import { AuthService } from './../../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router,
    private userService:UserService
    ) { }

  ngOnInit(): void {
  }

  email: string = '';
  password: string = '';

  submit() {
    this.authService.signin({email:this.email,password:this.password});
  }

}
