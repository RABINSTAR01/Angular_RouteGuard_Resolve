import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResovegGuard implements Resolve<any> {
  
  data1={
    name:'person a',
    class:'MCA',
  };
  data2={
    name:'person b',
    class:'MCA',
  };
  
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    // return this.data1;           note:this is for one object to return
    return {
     show1: this.data1,
      show2: this.data2
    }
    }
  }
