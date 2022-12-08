import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { GlobalService } from 'src/app/Services/global.service';
import { NgToastService } from 'ng-angular-popup'
import validateForm from 'src/app/validateForm/validateForm';
import { PvtserviceService } from 'src/app/private-module/pvtService/pvtservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    userName: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  })

  constructor(private globalService: GlobalService, private routeService: Router, private toastr: NgToastService, private pvtservice: PvtserviceService) { }


  ngOnInit(): void {
  }

  loginSubmit() {
    if (this.loginForm.valid) {

      this.globalService.login(this.loginForm.value.userName, this.loginForm.value.password).subscribe((x: any) => {
        let auth = x.find((y: any) => {
          return y.userName === this.loginForm.value.userName && y.password === this.loginForm.value.password;
        });
        if (auth) {
          localStorage.setItem('token', `${this.loginForm.value.userName}`)
          this.globalService.isAthunticated = true
          this.toastr.success({ detail: `Welcome Back ${this.loginForm.value.userName}`, summary: 'Login sucessful', duration: 5000 })
          this.loginForm.reset()
          this.routeService.navigate(['/admin'])
        }
        else {
          this.toastr.error({ detail: 'User Not Found', summary: 'You have entered Wrong UserName or Password', duration: 5000 })
        }
      })
    }
    else {
      validateForm.ValidateAllFormField(this.loginForm)
    }
  }


}
