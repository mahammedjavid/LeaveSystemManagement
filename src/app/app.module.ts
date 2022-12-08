import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { PrivateModuleModule } from './private-module/private-module.module';
import { GlobalService } from './Services/global.service';
import { NgToastModule } from 'ng-angular-popup';
import { NotfoundComponent } from './components/NotFound/notfound.component';
import { LoadService } from './load.service';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// function initfactory(loadService: LoadService) {
//   return () => loadService.init()
// }

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    PrivateModuleModule,
    NgToastModule,
    // NgbModule,
  ],
  providers: [
    // {
    //   provide: APP_INITIALIZER,
    //   useFactory: initfactory,
    //   deps: [LoadService],
    //   multi: true
    // }
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
