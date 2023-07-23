import { Injectable } from '@angular/core';
import {Product} from "../model/product.model";

@Injectable({
  providedIn: 'root'
})
export class AppStateService {
public productState :any={
  keyword : "",
   products :[],
  totalPages:0,
  pageSize:3,
  currentPage :1,
  totalPrroducts:0,
  status:"LOADING",
  errorMessage:""
}
  constructor() { }
//pour imyotaible : pour  changer state il faudrer de creer une copie
  public setProctState(state:any):void{
  this.productState={...this.productState,...state}
  }
}
