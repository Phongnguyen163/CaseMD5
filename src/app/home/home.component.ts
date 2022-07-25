import { Component, OnInit } from '@angular/core';
import {HouseService} from "../service/house.service";
import {House} from "../model/house";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  houses: House[] = [];
  constructor(private houseService: HouseService) { }

  ngOnInit(): void {
    this.showAll();
  }

  showAll() {
    this.houseService.findAll().subscribe((houses) => {
      this.houses = houses.content;

      console.log('house', houses);
    }, error => {
      console.log(error);
    })
  }
}
