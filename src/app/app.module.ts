import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PaymentComponent } from './payment/payment.component';
import { HttpModule } from '@angular/http';
import { LoginService } from './service/login.service';
import { UtilComponent } from './util/util.component';
import { RouterModule, Routes } from '@angular/router';
import { ModalMsgComponent } from './util/modalMsg.component';
import { HomeComponent } from './home/home.component';
import { TabTwoComponent } from './home/tab-two/tab-two.component';
import { TabThreeComponent } from './home/tab-three/tab-three.component';
import { TabHomeComponent } from './home/tab-home/tab-home.component';
import { TabFourComponent } from './home/tab-four/tab-four.component';
import { TabFiveComponent } from './home/tab-five/tab-five.component';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register',component: RegisterComponent },
  { path: 'payment', component: PaymentComponent },
  { path: 'home', component: HomeComponent },
  { path: 'tab1', component: TabHomeComponent },
  { path: 'tab2', component: TabTwoComponent },
  { path: 'tab3', component: TabThreeComponent },
  { path: 'tab4', component: TabFourComponent },
  { path: 'tab5', component: TabFiveComponent },

];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    PaymentComponent,
    ModalMsgComponent,
    HomeComponent,
    TabHomeComponent,
    TabTwoComponent,
    TabThreeComponent,
    TabFourComponent,
    TabFiveComponent,
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
    ),
    BrowserModule,HttpModule,FormsModule,CommonModule
  ],
  exports: [RouterModule],
  providers: [LoginService,UtilComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
