import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/Services/global.service';

@Component({
  selector: 'app-notfound',
  templateUrl: './notfound.component.html',
  styleUrls: ['./notfound.component.scss']
})
export class NotfoundComponent implements OnInit {

  constructor(private glob: GlobalService) { }

  ngOnInit(): void {
  }
  logOut() {
    this.glob.logout()
  }

}
