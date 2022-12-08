import { Component, OnInit } from '@angular/core';
import { PvtserviceService } from 'src/app/private-module/pvtService/pvtservice.service';
import { GlobalService } from 'src/app/Services/global.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private glob: GlobalService, private pvt: PvtserviceService) {
  }

  ngOnInit(): void {
  }
  getAuth() {
    return this.glob.isAthunticated
  }

  logout() {
    this.glob.logout()
  }


}
