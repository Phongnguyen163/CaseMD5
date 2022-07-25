import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../service/authentication.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isCheck: any;
  username = localStorage.getItem('USERNAME');

  constructor(private authenticationService: AuthenticationService,
              private router: Router) { }

  ngOnInit(): void {
    if (localStorage.getItem('USERNAME') == null) {
      this.isCheck = false;
    } else {
      this.isCheck = true;
    }
  }

  logout(){
    this.authenticationService.logout();
    window.location.replace('http://localhost:4200');
  }
}