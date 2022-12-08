import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/Services/global.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public glob: GlobalService) { }

  HeadName: string = ''


  ngOnInit(): void {
    let data: any = localStorage.getItem('token')
    this.HeadName = data
  }

  Employee() {
    if (localStorage.getItem('token') === 'Admin') {
      return false
    }
    else {
      return true
    }
  }





}
