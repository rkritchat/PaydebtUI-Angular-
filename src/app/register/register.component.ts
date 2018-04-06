import { Component, OnInit } from '@angular/core';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
  private rePwd:string;
  private message:string;
  private result:resultJson;
  data = {
     id:'',
     pwd:'',
     firstName:'',
     lastName:'',
     email:'',
     tell:'',
     message:'',
  }

  constructor(private loginService:LoginService) { }

  ngOnInit() {
  }

  register(){
    this.loginService.register(this.data).subscribe((res)=>{
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
    if(this.rePwd!=this.data.pwd){
      this.message='Password and Re-Password should be same.'
    }else{
      this.message='';
    }
  }

  clear(){
    this.data.id='';
    this.data.pwd='';
    this.data.firstName='';
    this.data.lastName='';
    this.data.email='';
    this.data.tell='';
  }
}

interface resultJson{
  status:any;
  result:any;
  erroMessage:any
}
