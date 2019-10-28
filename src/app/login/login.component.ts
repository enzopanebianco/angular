import { ProdutosService } from './../services/produtos.service';
import { RequestLogin } from './../user.model';
import { Component, OnInit, Input } from '@angular/core';
import * as jwt_decode from 'jwt-decode';
import { EventEmitter } from '@angular/core';
import { o } from 'odata';
import { ErrorMessageComponent } from '../error-message/error-message.component';
import { timeInterval } from 'rxjs/operators';
import { interval } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usuario: RequestLogin = {
    email: '',
    senha: '',
    token: ''
  }
  showSpinner:boolean;
  // erro:boolean;
  loginemiiter = new EventEmitter<String>();
  constructor(private service: ProdutosService,) {
  }

  ngOnInit() { 
  }
  // errorMsg:"Usuário ou Senha Incorretos";
  erro:boolean;
  loginUrl = "http://localhost:3001/api/login";
  loading(){
    this.showSpinner=true
    setTimeout(()=>{
      this.showSpinner=false;
    },3000)
  }
  fazerLogin() {
    this.loading();
    const response = o(this.loginUrl)
      .post('', this.usuario)
      .query()
      .then(res => { localStorage.setItem('token', res.token) })
      .catch(err => { console.log(err + "erro"),
        this.erro=true;
        
      
      console.log(response);
      })



    console.log("logado:" + this.service.Autenticado());
    console.log("admin:" + this.service.Autorizado());


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
  decoded() {
    let token = localStorage.getItem('token');
    let decode = jwt_decode(token);
    console.log(decode.id);
  }
  
}