import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { GlobalService } from '../Services/global.service';

@Injectable({
  providedIn: 'root'
})
export class GlobGuard implements CanActivate {
  constructor(private globService: GlobalService, private router: Router) {
    if (localStorage.length !== 0) {
      this.globService.isAthunticated = true
      // router.navigate([`/admin/`])
    }
    else {
      router.navigate(['/login'])
    }
  }
  canActivate() {

    if (this.globService.isAthunticated) {

      return true;
    }
    else {
      return false
    }
  }

}
