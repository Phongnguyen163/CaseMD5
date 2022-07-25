import { Component, OnInit } from '@angular/core';
import {HouseService} from "../../service/house.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {Category} from "../../model/category";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {House} from "../../model/house";


@Component({
  selector: 'app-edit-house',
  templateUrl: './edit-house.component.html',
  styleUrls: ['./edit-house.component.css']
})
export class EditHouseComponent implements OnInit {

  // @ts-ignore
  house:House;
  id:any;
  listCategory: Category[]=[];
  constructor(private houseService: HouseService,
              private activatedRoute: ActivatedRoute,
              private router:Router,
              private fb:FormBuilder) {
    this.activatedRoute.paramMap.subscribe((paraMap:ParamMap)=>{
      // @ts-ignore
      this.id = +paraMap.get('id');
      this.getHouse(this.id)
    })
  }
  form: FormGroup = new FormGroup({
    name: new FormControl(''),
    price: new FormControl(''),
    category: new FormControl(''),
    adress: new FormControl(''),
    bedrooom: new FormControl(''),
    bathroom: new FormControl(''),
    description: new FormControl(''),
    status: new FormControl(''),
    user: new FormControl(''),

  })

  ngOnInit(): void {
    // this.activatedRoute.paramMap.subscribe(paramap => {
    //   const id = paramap.get('id');
    //   console.log(id);
    //
    //   // @ts-ignore
    //   this.houseService.getById(id).subscribe(result => {
    //     // @ts-ignore
    //     this.house = result;
    //     console.log(result);
    //   }, error => {
    //     console.log(error);
    //   })
    // })
    // // @ts-ignore
    // this.house = {
    //   name: '',
    //   price: '',
    //   address:'',
    //   bathroom:'',
    //   description:'',
    //   status:'',
    // }

    this.houseService.getAllCategory().subscribe((data)=>{
      this.listCategory=data;
    })
  }

  getHouse(id:string){
    return this.houseService.getById(id).subscribe((data)=>{
      this.form = new FormGroup({
        name: new FormControl(data.name),
        price: new FormControl(data.price),
        address: new FormControl(data.address),
        bedroom: new FormControl(data.bedroom),
        bathroom: new FormControl(data.bathroom),
        description: new FormControl(data.description),
        category: new FormControl(data.category.name),
        user: new FormControl(data.user.username),
      })
    })
  }
obj:any
  edit(id:string){
    // @ts-ignore

    this.obj={
      name:this.form.value.name,
      price:this.form.value.price,
      address:this.form.value.address,
      bedroom:this.form.value.bedroom,
      bathroom:this.form.value.bathroom,
      description:this.form.value.description,
      // @ts-ignore
      category :{
        id: this.form.value.category
      }

    }
    console.log(this.obj);
    // @ts-ignore
    this.houseService.editHouse(id,this.obj).subscribe(()=>{
      alert("Ok");
      this.router.navigate(['/'])
    },error => {
      console.log(error);
    })
  }



}
