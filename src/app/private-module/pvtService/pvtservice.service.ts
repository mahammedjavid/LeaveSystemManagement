import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http'
import { environment } from 'src/environments/environment';


@Injectable()
export class PvtserviceService {

  constructor(private http: HttpClient) { }
  tab: any


  //users
  postData(data: any) {
    return this.http.post(environment.apiCallUser, data)
  }
  getData() {
    return this.http.get(environment.apiCallUser)
  }
  deleteData(id: number) {
    return this.http.delete(environment.apiCallUser + '/' + id)
  }
  update(data: any, id: number) {
    return this.http.put(environment.apiCallUser + '/' + id, data)
  }

  //holiday
  postHoliday(data: any) {
    return this.http.post(environment.apiCallholiday, data)
  }
  getHoliday() {
    return this.http.get(environment.apiCallholiday)
  }
  deleteholiday(id: any) {
    return this.http.delete(environment.apiCallholiday + '/' + id)
  }
  updateHoliday(data: any, id: number) {
    return this.http.put(environment.apiCallholiday + '/' + id, data)
  }

  //leavelist

  postleaveList(data: any) {
    return this.http.post(environment.apiCallLeaveList, data)
  }
  getleaveList() {
    return this.http.get(environment.apiCallLeaveList)
  }
  deleteLeaveList(id: any) {
    return this.http.delete(environment.apiCallLeaveList + '/' + id)
  }
  updateLeaveList(data: any, id: number) {
    return this.http.put(environment.apiCallLeaveList + '/' + id, data)
  }

  //LeaveRequestUpdate
  updateLeaveRequest(data: any, id: number) {
    return this.http.put(environment.apiCallLeaveList + '/' + id, data)
  }

  //get Data after leaveRequestData
  getDataAfterLeaveRequest() {
    return this.http.get(environment.apiCallLeaveList)
  }

}
