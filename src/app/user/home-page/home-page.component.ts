import { Component, OnInit } from '@angular/core';
import {House} from "../../model/House";
import {HttpClient} from "@angular/common/http";
import {HouseService} from "../../service/house.service";
import {Category} from "../../model/Category";
import {FormControl, FormGroup} from "@angular/forms";
import {CategoryService} from "../../service/category.service";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  // findAll
  listHous: House[] = [];
  listCategory: any[] = [];
  constructor(private httpClien: HttpClient,
              private houseService: HouseService,
              private categoryService: CategoryService,
  ) { }

  ngOnInit(): void {
    this.getAllHouse();
    this.getAllCategory();
  }
  getAllHouse(){
this.houseService.findAllHouse().subscribe((data: House[]) =>{
  // @ts-ignore
  this.listHous = data.content;
})
  }

  getAllCategory(){
    this.categoryService.findAllCategory().subscribe((data: Category[]) =>{
      this.listCategory = data;
    })
  }
}
