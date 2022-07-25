import { Component, OnInit } from '@angular/core';
import {HouseService} from "../service/house.service";
import {House} from "../model/house";

@Component({
  selector: 'app-house',
  templateUrl: './house.component.html',
  styleUrls: ['./house.component.css']
})
export class HouseComponent implements OnInit {
  houses: House[] = [];
  house: any;

  constructor(private houseServiceService: HouseService) {
  }

  ngOnInit(): void {
    this.showAll();
  }

  showAll() {
    this.houseServiceService.findAll().subscribe((houses) => {
      this.houses = houses.content;
      console.log('house', houses);
    }, error => {
      console.log(error);
    })
  }

}
