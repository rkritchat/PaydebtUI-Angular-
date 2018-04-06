import { Component, OnInit, ViewChild } from '@angular/core';
import { LoginService } from '../service/login.service';
import { of } from 'rxjs/observable/of';
import { UtilComponent } from '../util/util.component';
import { RouterLink ,Routes, Router, ActivatedRoute } from '@angular/router';
import { ModalMsgComponent } from '../util/modalMsg.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  stage: string;
  private userDetail:UserDetail;
  private result:resultJson;
  private message:string;
  data = {
    id:'',
    pwd:''
  }

  private rePwd:string;
  regis = {
     id:'',
     pwd:'',
     firstName:'',
     lastName:'',
     email:'',
     tell:'',
     message:'',
  }

  @ViewChild('modal') modal:ModalMsgComponent;

  constructor(
    private loginService:LoginService,
    private commonUtil:UtilComponent,
    private router: Router,
    private route: ActivatedRoute,)
    { }

  ngOnInit() {
    this.stage = "login"
  }
  
  login(){
    this.commonUtil.setStart()
    this.loginService.login(this.data).subscribe((res)=>{
      this.result = res;
      if(this.result.erroMessage==null){
        this.message='';
        this.router.navigate(['home']);
      }else{
        this.message=this.result.erroMessage;
        this.modal.show(this.result.erroMessage);
      }
      this.commonUtil.setStop()
      console.log(this.result);
    });
    

    return false;
  }

  sendMeRegister() {
    // this.router.navigate(['register']);
    this.stage = "regis"
  }

  register(){
    this.loginService.register(this.regis).subscribe((res)=>{
      console.log('asd'+res);
      this.result = res;
      if(this.result.erroMessage!=null){
        this.message = this.result.erroMessage;
      }else{
        this.message ='Create user Successfully.'
      }
    });
  }

  validatePassword(){
    if(this.rePwd!=this.regis.pwd){
      this.message='Password and Re-Password should be same.'
    }else{
      this.message='';
    }
  }

  clear(){
    this.regis.id='';
    this.regis.pwd='';
    this.regis.firstName='';
    this.regis.lastName='';
    this.regis.email='';
    this.regis.tell='';
  }

  sendMeLogin(){
    // this.router.navigate(['login']);
    this.stage = "login"
  }
}

interface User{
  id:string;
  pwd:string;
}

interface UserDetail{
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  tell: string;
  userId: string;
}

interface resultJson{
  status:any;
  result:any;
  erroMessage:any
}