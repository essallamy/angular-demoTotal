import { Component } from '@angular/core';
import {AppStateService} from "../services/app-state.service";
import {LoadingService} from "../services/loading.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  actions : Array<any>=[
    {title : "home","route":"/home",icon :"house"},
    {title : "product","route":"/admin/product",icon :"search"},
    {title : "New Product","route":"/admin/newProduct",icon :"hospital"},
  ];
  currentAction :any;

constructor(public appState:AppStateService,
           public  loadingService: LoadingService,
            private router: Router) {
}
  public setCurrentAction(action: any) {
    this.currentAction=action;
  }

  logout() {
    this.appState.authState={};
    this.router.navigateByUrl("/login");
  }
  login() {

    this.router.navigateByUrl("/login");
  }
}
