import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateFn,
  Router,
  RouterStateSnapshot,
  UrlTree
} from '@angular/router';
import {Observable} from "rxjs";
import {AppStateService} from "../services/app-state.service";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn:'root'
})

export class authorizationGuard implements CanActivate{
  constructor(private appState : AppStateService,
              private router : Router) {
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    console.log(this.appState.authState.roles);
   // if(this.appState.authState.roles.includes(route.data['roles'])){
    if(this.appState.authState.roles.includes("ADMIN")){
      return true;
    }else{
      this.router.navigateByUrl("/admin/notAuthorized")
      return false;
    }
  }
}
