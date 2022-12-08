import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PvtserviceService } from '../../pvtService/pvtservice.service';
import { NgToastService } from 'ng-angular-popup'
import validateForm from 'src/app/validateForm/validateForm';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  shouldShow = false

  constructor(private pvtService: PvtserviceService, private toastr: NgToastService) { }

  ngOnInit(): void {
    this.generateData()
  }
  addUserFake: any = {
    firstName: '',
    lastName: '',
    userName: '',
    mobileNumber: '',
    password: ''
  }

  showUpdateBtn = false

  getDataInfo: any = []

  addUserForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    userName: new FormControl('', [Validators.required]),
    mobileNumber: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),

  })

  onFormSubmit(val: any) {
    this.shouldShow = true
    console.log(val)
    if (this.addUserForm.valid) {
      // this.addUserForm.reset()
      this.pvtService.postData(val).subscribe((x) => {
        this.generateData()
        this.toastr.success({ detail: 'Hey Admin', summary: 'Your Request Added Successfully', duration: 5000 })
        let cancel = document.getElementById('cancel')
        cancel?.click()
        this.addUserForm.reset()
      })
    }
    else {
      validateForm.ValidateAllFormField(this.addUserForm)
    }
  }
  generateData() {
    this.pvtService.getData().subscribe((x) => {
      this.getDataInfo = x
    })
  }

  deleteData(id: number) {
    if (confirm("Are You sure want to delete")) {
      this.pvtService.deleteData(id).subscribe((x) => {
        this.generateData()
      })
    }
  }

  editClick(data: any) {
    this.showUpdateBtn = true
    this.addUserFake.id = data.id
    this.addUserForm.controls['userName'].setValue(data.userName)
    this.addUserForm.controls['firstName'].setValue(data.firstName)
    this.addUserForm.controls['lastName'].setValue(data.lastName)
    this.addUserForm.controls['mobileNumber'].setValue(data.mobileNumber)
    this.addUserForm.controls['password'].setValue(data.password)
  }

  update() {

    this.addUserFake.userName = this.addUserForm.value.userName
    this.addUserFake.firstName = this.addUserForm.value.firstName
    this.addUserFake.lastName = this.addUserForm.value.lastName
    this.addUserFake.mobileNumber = this.addUserForm.value.mobileNumber
    this.addUserFake.password = this.addUserForm.value.password


    if (this.addUserForm.valid) {
      this.showUpdateBtn = false
      this.pvtService.update(this.addUserFake, this.addUserFake.id).subscribe((x: any) => {
        this.toastr.success({ detail: 'Hey Admin', summary: 'Your Request Updated Successfully', duration: 5000 })
        this.generateData()
        this.addUserForm.reset()
        let cancel = document.getElementById('cancel')
        cancel?.click()
      })
    }
    else {
      validateForm.ValidateAllFormField(this.addUserForm)
    }
  }

}
