import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {ProductComponent} from "./product/product.component";
import {NewProductComponent} from "./new-product/new-product.component";
import {EditProductComponent} from "./edit-product/edit-product.component";
import {LoginComponent} from "./login/login.component";
import {AdminTemplateComponent} from "./admin-template/admin-template.component";
import {authenticationGuard} from "./guards/authentication.guard";
import {authorizationGuard} from "./guards/authorization.guard";
import {NotAuthorizedComponent} from "./not-authorized/not-authorized.component";

const routes: Routes = [
  {path :"login",component: LoginComponent},
  {path:"admin",component:AdminTemplateComponent,canActivate:[authenticationGuard],children:[
      {path :"product",component: ProductComponent},
      {path :"newProduct",component: NewProductComponent,canActivate:[authorizationGuard]},
      {path :"editProduct/:id",component: EditProductComponent,canActivate:[authorizationGuard],data :{roles:['ADMIN']}},
      {path :"notAuthorized",component: NotAuthorizedComponent}

    ]},
  {path :"home",component: HomeComponent},
  {path :"",redirectTo :"login",pathMatch:'full'}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
