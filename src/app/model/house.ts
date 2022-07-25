import {Category} from "./category";
import {User} from "./user";

export interface House{
  id:string;
  name:string;
  category:Category;
  address:string;
  bedroom:string;
  bathroom:string;
  description:string;
  price:string;
  user:User;
  status:string;
}
