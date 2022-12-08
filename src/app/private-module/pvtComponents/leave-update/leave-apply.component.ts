import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PvtserviceService } from '../../pvtService/pvtservice.service';
import { NgToastService } from 'ng-angular-popup'
import validateForm from 'src/app/validateForm/validateForm';


@Component({
  selector: 'app-leave-apply',
  templateUrl: './leave-apply.component.html',
  styleUrls: ['./leave-apply.component.scss']
})
export class LeaveApplyComponent implements OnInit {

  constructor(private pvtService: PvtserviceService, private toastr: NgToastService) { }

  ngOnInit(): void {
    this.getData()
  }

  leaveRequestFake: any = {
    id: '',
    date: '',
    name: '',
    mobileNumber: '',
    days: '',
    reason: '',
    status: ''
  }
  leaveUpdateForm = new FormGroup({
    status: new FormControl('', Validators.required)
  })
  getLeaveListData: any = []

  getData() {
    this.pvtService.getleaveList().subscribe((x) => {
      this.getLeaveListData = x
    })
  }
  edit(data: any) {
    this.leaveRequestFake.id = data.id
    this.leaveRequestFake.date = data.date
    this.leaveRequestFake.name = data.name
    this.leaveRequestFake.mobileNumber = data.mobileNumber
    this.leaveRequestFake.days = data.days
    this.leaveRequestFake.reason = data.reason
    this.leaveUpdateForm.controls['status'].setValue(data.status)
  }
  update() {
    this.leaveRequestFake.status = this.leaveUpdateForm.value.status

    if (this.leaveUpdateForm.valid) {
      this.pvtService.updateLeaveRequest(this.leaveRequestFake, this.leaveRequestFake.id).subscribe((x) => {
        this.toastr.success({ detail: 'Hey', summary: 'Yourr request Updated Successfully', duration: 5000 })
        this.getData()
        this.leaveUpdateForm.reset()
        let cancel = document.getElementById('cancel')
        cancel?.click()
      })
    }
    else {
      validateForm.ValidateAllFormField(this.leaveUpdateForm)
    }

  }

}
