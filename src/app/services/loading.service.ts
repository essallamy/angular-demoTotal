import { Injectable } from '@angular/core';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  public isloading$ =new Subject<boolean>()


  constructor() { }
showLoadingSpinner():void{
    this.isloading$.next(true);
}
hideLoadingSpinner():void{
    this.isloading$.next(false);
}
}
