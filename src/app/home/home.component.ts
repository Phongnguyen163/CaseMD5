import { Component, OnInit } from '@angular/core';
import {House} from "../model/house";
import {HouseService} from "../service/house.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  house:House[]=[];
  constructor(private houseService :HouseService) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(){
    this.houseService.getAll().subscribe((data)=>{
      // @ts-ignore
      this.house=data.content;
    },error => {
      console.log(error)
    })
  }

}
