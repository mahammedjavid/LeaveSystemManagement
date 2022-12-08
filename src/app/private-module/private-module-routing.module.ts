import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuardGuard } from './Guard/guard.guard';
import { DashBoardComponent } from './pvtComponents/dash-board/dash-board.component';
import { HolidayComponent } from './pvtComponents/Holiday/holiday.component';
import { HomeComponent } from './pvtComponents/home/home.component';
import { LeaveApplyComponent } from './pvtComponents/leave-update/leave-apply.component';
import { LeavelistComponent } from './pvtComponents/leaveList/leavelist.component';
import { UserComponent } from './pvtComponents/User/user.component';

const routes: Routes = [
  {
    path: "", component: DashBoardComponent, children: [
      // { path: "home", component: HomeComponent },
      { path: "user", component: UserComponent, canActivate: [GuardGuard] },
      { path: "holiday", component: HolidayComponent, canActivate: [GuardGuard] },
      { path: "leavelist", component: LeavelistComponent },
      { path: "leaveapply", component: LeaveApplyComponent, canActivate: [GuardGuard] },
      { path: "", redirectTo: "/admin/home", pathMatch: 'full' }
    ]
  },
  {
    path: 'home', component: HomeComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivateModuleRoutingModule { }
