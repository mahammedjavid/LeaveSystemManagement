import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { GlobalService } from 'src/app/Services/global.service';

@Injectable({
  providedIn: 'root'
})
export class GuardGuard implements CanActivate {

  constructor(private glob: GlobalService) {

  }
  canActivate() {
    if (localStorage.getItem('token') === 'Admin') {
      return true
    }
    else {
      return false
    }
  }

}
