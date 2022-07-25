import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {HouseService} from "../service/house.service";
import {Category} from "../model/category";
import {CategoryService} from "../service/category.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-house',
  templateUrl: './add-house.component.html',
  styleUrls: ['./add-house.component.css']
})
export class AddHouseComponent implements OnInit {
  houseForm: FormGroup = new FormGroup({
    name: new FormControl(),
    categoryId: new FormControl(),
    address: new FormControl(),
    bedroom: new FormControl(),
    bathroom: new FormControl(),
    description: new FormControl(),
    price: new FormControl(),
    status: new FormControl()
  })
  house: any;
  listCategories: Category[] = [];
  constructor(private houseServiceService: HouseService,
              private categoryService: CategoryService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.showAllCategories()
  }
  showAllCategories(){
    this.categoryService.findAll().subscribe((categories) => {
      this.listCategories = categories;
    }, error => {
      console.log(error)
    })
  }
  add() {
    this.house = {
      name: this.houseForm.value.name,
      category: {
        id: this.houseForm.value.categoryId
      },
      address: this.houseForm.value.address,
      bedroom: this.houseForm.value.bedroom,
      bathroom: this.houseForm.value.bathroom,
      description: this.houseForm.value.description,
      price: this.houseForm.value.price,
      owner:{
        id: localStorage.getItem('ID')
      },
      status: this.houseForm.value.status
    }
    this.houseServiceService.save(this.house).subscribe(() => {
      this.router.navigate(['']);
    })
  }
}