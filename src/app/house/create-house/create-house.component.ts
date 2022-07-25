import {Component, OnInit} from '@angular/core';
import {HouseService} from "../../service/house.service";
import {FormControl, FormGroup} from "@angular/forms";
import {House} from "../../model/house";
import {Category} from "../../model/category";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-house',
  templateUrl: './create-house.component.html',
  styleUrls: ['./create-house.component.css']
})
export class CreateHouseComponent implements OnInit {
  form: FormGroup = new FormGroup({
    name: new FormControl(''),
    price: new FormControl(''),
    category: new FormControl(''),
    address: new FormControl(''),
    bedroom: new FormControl(''),
    bathroom: new FormControl(''),
    description: new FormControl(''),
    status: new FormControl(''),
    user: new FormControl(''),

  })
  // house:House;

  listCategory: Category[] = [];

  constructor(private houseService: HouseService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.houseService.getAllCategory().subscribe((data) => {
      this.listCategory = data;
    })
  }

  create() {

    const house = {
      name: this.form.value.name,
      price: this.form.value.price,
      address: this.form.value.address,
      bedroom: this.form.value.bedroom,
      bathroom: this.form.value.bathroom,
      description: this.form.value.description,
      status: this.form.value.status,
      // @ts-ignore
      category: {
        id: this.form.value.category
      }
    }
    console.log(house);
    // @ts-ignore
    this.houseService.create(house).subscribe(() => {
      alert("Ok");
      this.router.navigate(['/'])
    }, error => {
      console.log(error);
    })
  }

}
