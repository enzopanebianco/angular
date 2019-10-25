import { ProdutosService } from './../services/produtos.service';
import { RequestLogin } from './../user.model';
import { Component, OnInit } from '@angular/core';
import * as jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   usuario:RequestLogin={
     email:'',
     senha:'',
     token:''
   }
   erro=false;
  constructor(private service:ProdutosService) { 
    
  }

  ngOnInit() {
    this.decoded();
  }
  fazerLogin(){
    this.service.login(this.usuario)
    .subscribe(
      res=>{console.log(res)
        localStorage.setItem('token',JSON.stringify(res.token))
      }
     
    )
  }
   getToken(): string {
    return localStorage.getItem('token');
  }
  
  public decodePayloadJWT(): any {
    try {
      return jwt_decode(this.getToken());
    } catch (Error) {
      return null;
    }
  }
  decoded(){
    let token = localStorage.getItem('token');
    let decode = jwt_decode(token);
    console.log(decode.id);
  }
}