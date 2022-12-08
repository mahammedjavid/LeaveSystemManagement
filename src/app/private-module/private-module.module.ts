import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrivateModuleRoutingModule } from './private-module-routing.module';
import { DashBoardComponent } from './pvtComponents/dash-board/dash-board.component';
import { HolidayComponent } from './pvtComponents/Holiday/holiday.component';
import { HomeComponent } from './pvtComponents/home/home.component';
import { LeaveApplyComponent } from './pvtComponents/leave-update/leave-apply.component';
import { LeavelistComponent } from './pvtComponents/leaveList/leavelist.component';
import { UserComponent } from './pvtComponents/User/user.component';
import { GlobalService } from '../Services/global.service';
import { HttpClientModule } from '@angular/common/http';
import { PvtserviceService } from './pvtService/pvtservice.service';
import { ReactiveFormsModule } from '@angular/forms';
import { PvtnotfoundComponent } from './pvtComponents/pvtNotFound/pvtnotfound.component';


@NgModule({
  declarations: [
    DashBoardComponent,
    HolidayComponent,
    HomeComponent,
    LeaveApplyComponent,
    LeavelistComponent,
    UserComponent,
    PvtnotfoundComponent,
  ],
  imports: [
    CommonModule,
    PrivateModuleRoutingModule,
    ReactiveFormsModule
  ],
  providers: [GlobalService, PvtserviceService]
})
export class PrivateModuleModule { }
