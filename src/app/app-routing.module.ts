import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { NotfoundComponent } from './components/NotFound/notfound.component';
import { GlobGuard } from './globGuard/glob.guard';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'admin', loadChildren: () => import('./private-module/private-module.module').then((x) => x.PrivateModuleModule), canActivate: [GlobGuard] },
  { path: '**', component: NotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
