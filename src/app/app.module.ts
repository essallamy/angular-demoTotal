import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { NewProductComponent } from './new-product/new-product.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { EditProductComponent } from './edit-product/edit-product.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AppErrorComponent } from './app-error/app-error.component';
import {AppHttpInterceptor} from "./services/app-http.interceptor";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductComponent,
    NewProductComponent,
    EditProductComponent,
    DashboardComponent,
    NavbarComponent,
    AppErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,ReactiveFormsModule,FormsModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS,useClass:AppHttpInterceptor,multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
