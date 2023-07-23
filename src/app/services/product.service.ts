import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Product} from "../model/product.model";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }
  // pour retourne une reponse httpresponse avec back et header
  public getProduct(keyword: string,page :number=1,size:number=4){
  return this.http.get(`http://localhost:8088/products?name_like=${keyword}&_page=${page}&_limit=${size}`,{observe:'response'});
  }
  /*public getProduct(page :number=1,size:number=4):Observable<Array<Product>>{
    return this.http.get<Array<Product>>(`http://localhost:8088/products?_page=${page}&_limit=${size}`);
  }*/
  public checkProduct(product:any):Observable<Product>{
    return this.http.patch<Product>("http://localhost:8088/products/"+product.id,{checked:!product.checked})
  }
  public deleteProduct(product:any){
    return this.http.delete<any>("http://localhost:8088/products/"+product.id)
  }

  saveProduct(product: Product):Observable<Product> {
    return this.http.post<Product>("http://localhost:8088/products",product)

  }
  public searchProduct(keyword: string,page:number,size:number):Observable<Array<Product>>{
    return this.http.get<Array<Product>>(`http://localhost:8088/products?name_like=${keyword}&_page=${page}&limit=${size}`);

  }

  getProductById(protecteId: number) :Observable<Product>{
    return this.http.get<Product>(`http://localhost:8088/products/${protecteId}`);

  }

  updateProduct(product: Product):Observable<Product>{
    return this.http.put<Product>(`http://localhost:8088/products/${product.id}`,product)
  }
}
