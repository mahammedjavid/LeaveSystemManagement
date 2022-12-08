import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PvtserviceService } from '../../pvtService/pvtservice.service';
import { NgToastService } from 'ng-angular-popup'
import validateForm from 'src/app/validateForm/validateForm';
import { DateValidate } from 'src/app/validateForm/validateForm';


@Component({
  selector: 'app-leavelist',
  templateUrl: './leavelist.component.html',
  styleUrls: ['./leavelist.component.scss']
})
export class LeavelistComponent implements OnInit {

  constructor(private pvtService: PvtserviceService, private toastr: NgToastService) { }

  ngOnInit(): void {
    DateValidate.getDateValidation()
    // this.generateLeaveList()
    this.getData()
  }

  getLeavelistData: any = []

  addFakeLeaveListData: any = {
    date: '',
    name: '',
    mobileNumber: '',
    days: '',
    reason: '',
    status: ''
  }
  showUpdateBtn = false

  leaveForm = new FormGroup({
    date: new FormControl('', [Validators.required]),
    name: new FormControl('', [Validators.required]),
    mobileNumber: new FormControl('', [Validators.required]),
    days: new FormControl('', [Validators.required]),
    reason: new FormControl('', [Validators.required])
  })



  onleaveApply() {

    if (this.leaveForm.valid) {
      this.addFakeLeaveListData.date = this.leaveForm.value.date
      this.addFakeLeaveListData.name = this.leaveForm.value.name
      this.addFakeLeaveListData.mobileNumber = this.leaveForm.value.mobileNumber
      this.addFakeLeaveListData.days = this.leaveForm.value.days
      this.addFakeLeaveListData.reason = this.leaveForm.value.reason
      this.addFakeLeaveListData.status = this.addFakeLeaveListData.status

      this.pvtService.postleaveList(this.addFakeLeaveListData).subscribe((x) => {
        this.generateLeaveList()
        this.toastr.success({ detail: 'Hey', summary: 'Yourr request Added Successfully', duration: 5000 })
        let cancel = document.getElementById('cancel')
        cancel?.click()
        this.leaveForm.reset()
      })
    }
    else {
      validateForm.ValidateAllFormField(this.leaveForm)
    }
  }

  generateLeaveList() {
    this.pvtService.getleaveList().subscribe((x) => {
      this.getLeavelistData = x
    })
  }
  deleteData(id: number) {
    if (confirm('Are you sure want to delete')) {
      this.pvtService.deleteLeaveList(id).subscribe((x) => {
        this.generateLeaveList()
      })
    }
  }

  editClick(data: any) {
    this.showUpdateBtn = true
    this.addFakeLeaveListData.id = data.id
    this.leaveForm.controls['date'].setValue(data.date)
    this.leaveForm.controls['name'].setValue(data.name)
    this.leaveForm.controls['mobileNumber'].setValue(data.mobileNumber)
    this.leaveForm.controls['days'].setValue(data.days)
    this.leaveForm.controls['reason'].setValue(data.reason)
  }

  updateLeave() {
    this.addFakeLeaveListData.date = this.leaveForm.value.date
    this.addFakeLeaveListData.name = this.leaveForm.value.name
    this.addFakeLeaveListData.mobileNumber = this.leaveForm.value.mobileNumber
    this.addFakeLeaveListData.days = this.leaveForm.value.days
    this.addFakeLeaveListData.reason = this.leaveForm.value.reason
    this.addFakeLeaveListData.status = this.getLeavelistData.status

    if (this.leaveForm.valid) {
      this.showUpdateBtn = false
      this.pvtService.updateLeaveList(this.addFakeLeaveListData, this.addFakeLeaveListData.id).subscribe((x: any) => {
        this.toastr.success({ detail: 'Hey', summary: 'Yourr request Updated Successfully', duration: 5000 })
        this.getData()
        this.leaveForm.reset()
        let cancel = document.getElementById('cancel')
        cancel?.click()
      })
    }
    else {
      validateForm.ValidateAllFormField(this.leaveForm)
    }
  }
  getData() {
    this.pvtService.getDataAfterLeaveRequest().subscribe((x: any) => {
      this.getLeavelistData = x
    })
  }


}
