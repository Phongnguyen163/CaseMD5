import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {House} from "../model/house";
const  API_URl='http://localhost:8080/home';
@Injectable({
  providedIn: 'root'
})
export class HouseService {

  constructor(private httpClient: HttpClient) { }
  getAll():Observable<House[]>{
    return this.httpClient.get<House[]>(API_URl)
  }
}
