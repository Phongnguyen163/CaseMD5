import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import { Category } from 'src/app/model/Category';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {HouseService} from "../../service/house.service";
import {CategoryService} from "../../service/category.service";
import {HomeService} from "../../service/home.service";

@Component({
  selector: 'app-house-create',
  templateUrl: './house-create.component.html',
  styleUrls: ['./house-create.component.css']
})
export class HouseCreateComponent implements OnInit {
  form = new FormGroup({
    name: new FormControl(''),
    category: new FormControl(''),
    address: new FormControl(''),
    bedroom: new FormControl(''),
    bathroom: new FormControl(''),
    description: new FormControl(''),
    price: new FormControl(''),
    status: new FormControl(''),
    owner: new FormControl('')
  });
  obj: any;
  // @ts-ignore
  listCategory: Category[];
  constructor(private httpClien: HttpClient, private router: Router,
              private houseService: HomeService,
              private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.categoryService.findAllCategory().subscribe((data: Category) => {
      // @ts-ignore
      this.listCategory = data;
    });
  }
  addd(){
  this.obj = {
  name: this.form.value.name,
  category: {
    id: this.form.value.category
  },
  address: this.form.value.address,
  bedroom: this.form.value.bedroom,
  bathroom: this.form.value.bathroom,
  description: this.form.value.description,
  price: this.form.value.price,
    status: this.form.value.status,
};
    this.houseService.saveHome(this.obj).subscribe((data) => {
      this.obj  = data;

    })
  }

}
