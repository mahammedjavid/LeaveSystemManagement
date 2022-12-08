import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PvtserviceService } from '../../pvtService/pvtservice.service';
import { NgToastService } from 'ng-angular-popup'
import validateForm, { DateValidate } from 'src/app/validateForm/validateForm';

@Component({
  selector: 'app-holiday',
  templateUrl: './holiday.component.html',
  styleUrls: ['./holiday.component.scss']
})
export class HolidayComponent implements OnInit {

  constructor(private pvtService: PvtserviceService, private toastr: NgToastService) {

  }


  ngOnInit(): void {
    DateValidate.getDateValidation()
    this.generateHolidayList()
  }
  getholidayData: any = []

  addFakeHolidayData: any = {
    date: '',
    day: '',
    name: '',
    type: ''
  }
  showUpdateBtn = false

  holidayForm = new FormGroup({
    date: new FormControl('', [Validators.required]),
    day: new FormControl('', [Validators.required]),
    name: new FormControl('', [Validators.required]),
    type: new FormControl('', [Validators.required])
  })

  onSubmitHoliday(val: any) {
    console.log(val)
    if (this.holidayForm.valid) {
      this.pvtService.postHoliday(val).subscribe((x) => {
        this.generateHolidayList()
        this.toastr.success({ detail: 'Hey Admin', summary: 'Your Request Added Successfully', duration: 5000 })
        let cancel = document.getElementById('cancel')
        cancel?.click()
        this.holidayForm.reset()

      })
    }
    else {
      validateForm.ValidateAllFormField(this.holidayForm)
    }
  }

  generateHolidayList() {
    this.pvtService.getHoliday().subscribe((x) => {
      this.getholidayData = x
    })
  }

  deleteData(id: number) {
    if (confirm('Are you sure want to delete')) {
      this.pvtService.deleteholiday(id).subscribe((x) => {
        this.generateHolidayList()
      })
    }
  }



  editClick(data: any) {
    this.showUpdateBtn = true
    this.addFakeHolidayData.id = data.id
    this.holidayForm.controls['date'].setValue(data.date)
    this.holidayForm.controls['day'].setValue(data.day)
    this.holidayForm.controls['name'].setValue(data.name)
    this.holidayForm.controls['type'].setValue(data.type)
  }

  updateHoliday() {
    this.addFakeHolidayData.date = this.holidayForm.value.date
    this.addFakeHolidayData.day = this.holidayForm.value.day
    this.addFakeHolidayData.name = this.holidayForm.value.name
    this.addFakeHolidayData.type = this.holidayForm.value.type

    if (this.holidayForm.valid) {
      this.showUpdateBtn = false
      this.pvtService.updateHoliday(this.addFakeHolidayData, this.addFakeHolidayData.id).subscribe((x: any) => {
        this.toastr.success({ detail: 'Hey Admin', summary: 'Your Request Updated Successfully', duration: 5000 })
        this.generateHolidayList()
        this.holidayForm.reset()
        let cancel = document.getElementById('cancel')
        cancel?.click()
      })
    }
    else {
      validateForm.ValidateAllFormField(this.holidayForm)
    }
  }

}

