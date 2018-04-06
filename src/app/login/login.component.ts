import { Component, OnInit } from '@angular/core';
import { LoginService } from '../service/login.service';
import { of } from 'rxjs/observable/of';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private userDetail:UserDetail;
  private result:resultJson;
  private message:string;
  data = {
    id:'',
    pwd:''
  }

  constructor(private loginService:LoginService) { }

  ngOnInit() {}
  
  login(){
    
    this.loginService.login(this.data).subscribe((res)=>{
      this.result = res;
      if(this.result.erroMessage==null){
        this.message='';
      }else{
        this.message=this.result.erroMessage;
      }
      console.log(this.result);
    });
    

    return false;
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