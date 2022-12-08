import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  constructor(private http: HttpClient, private router: Router) { }

  isAthunticated = false
  Employeeeeeee = true

  login(userName: any, password: any) {
    console.log(userName, password)

    if (userName === 'Admin' && password === '1') {
      this.isAthunticated = true
      localStorage.setItem('token', `${userName}`)
      this.Employeeeeeee = false
    }
    else {
      // localStorage.setItem('token', `${userName}`)
      this.Employeeeeeee = true
    }

    // this.isAthunticated = true
    return this.http.get(environment.apiCallUser)
  }
  logout() {
    localStorage.removeItem('token')
    this.isAthunticated = false
    return this.router.navigate(['/login'])
  }
}
