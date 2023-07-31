import {Component, Input, Output, EventEmitter, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ProductService} from "../services/product.service";
import {Product} from "../model/product.model";
import {Observable} from "rxjs";
import {Router} from "@angular/router";
import {AppStateService} from "../services/app-state.service";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit{


  constructor(private ps:ProductService,
              private router : Router
              ,public appState: AppStateService) {
  }
/*constructor(private http:HttpClient) {
}*/
ngOnInit() {
 this.getProducts()
}

getProducts(){

  //this.appState.productState.status="LOADING";
  /*this.appState.setProctState({
    status:"LOADING"
  })*/
  this.ps.getProduct(
    this.appState.productState.keyword,
    this.appState.productState.currentPage,
    this.appState.productState.pageSize)
    .subscribe({
      next : (resp)=>{
        //this.appState.productState.products=resp.body as Product[];
       let products=resp.body as Product[];
        let totalProduct:number=parseInt(resp.headers.get('x-total-count')!);
        this.appState.productState.totalPrroducts=totalProduct;
       // this.appState.productState.totalPages=Math.floor(totalProduct / this.appState.productState.pageSize);
        let totalPages=Math.floor(totalProduct / this.appState.productState.pageSize);
        console.log(this.appState.productState.totalPages);
        if(totalProduct%this.appState.productState.pageSize !=0){
          //this.appState.productState.totalPages=this.appState.productState.totalPages+1;
         ++totalPages;
        }
        this.appState.setProctState({
          products :products,
          totalProducts:totalProduct,
          totalPages : totalPages,
          status :"LOADED"
          })
      },
      error :err => {

        this.appState.productState.status="ERROR";
        this.appState.productState.errorMessage=err;
      }
    })

}


   handelCheckProduct(product: Product) {

     this.ps.checkProduct(product).subscribe(
       {next:updatedProduct => {
           product.checked=!product.checked;
         }}
     )

  }

  handelDelete(product: Product) {
    if(confirm("Etes vous sûre?"))
     this.ps.deleteProduct(product).subscribe({
       next:value => {
         this.getProducts();
         //this.products=this.products.filter(p=>p.id!=product.id);
       }
    })
  }

  /*searchProducts() {
  this.currentPage=1;
  this.totalPages=0
this.ps.searchProduct(this.keyword,this.currentPage,this.pageSize).subscribe({
  next : value => {
    this.products=value;
    }
   })
  }
*/
  handelGotoPage(page:number) {
    this.appState.productState.currentPage=page;
  this.getProducts();


  }

  handelEdit(product: Product) {
this.router.navigateByUrl(`/admin/editProduct/${product.id}`)
  }


}
