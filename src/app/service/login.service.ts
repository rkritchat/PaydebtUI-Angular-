import { Injectable, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map'
import { RequestOptionsArgs } from '@angular/http';
import { Headers,RequestOptions } from '@angular/http';

@Injectable()
export class LoginService implements OnInit{
    headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
    options = new RequestOptions({ headers: this.headers }); // Create a request option
    private requestHeader:Header;
    private header:Headers;
    private option:RequestOptionsArgs
    constructor(private http:Http){

    }

    ngOnInit(){
        this.header.append('Content-Type','application/json');
        this.option.headers= this.header;
    }

    login(user:User){
       return this.http.post("http://localhost:8181/user",  
                JSON.stringify(user),this.options).map((res)=>res.json());
    }

    register(userForm:UserForm){
        return this.http.put("http://localhost:8181/user",
        JSON.stringify(userForm),this.options).map((res)=>res.json());
    }
}
interface User {
    id: string;
    pwd: string;
    
} 

interface Header{
    key:string;
    value:string;
}

interface UserForm{
    id: string;
    pwd:string;
    firstName: string;
    lastName: string;
    email: string;
    tell: string;
  }