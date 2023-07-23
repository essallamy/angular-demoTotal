import { Component } from '@angular/core';
import {AppStateService} from "../services/app-state.service";
import {LoadingService} from "../services/loading.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  actions : Array<any>=[
    {title : "home","route":"/home",icon :"house"},
    {title : "product","route":"/product",icon :"search"},
    {title : "New Product","route":"/newProduct",icon :"hospital"},
  ];
  currentAction :any;

constructor(public appState:AppStateService,
           public  loadingService: LoadingService) {
}
  set setCurrentAction(action: any) {
    this.currentAction=action;
  }

}
