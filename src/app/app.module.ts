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

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    PaymentComponent
  ],
  imports: [
    BrowserModule,HttpModule,FormsModule,CommonModule
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
