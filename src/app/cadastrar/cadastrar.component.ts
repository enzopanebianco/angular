import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RequestUser, ResponseUser } from '../user.model';
import { ProdutosService } from '../services/produtos.service';
import {map} from "rxjs/operators";

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  request:RequestUser={
    name:"",
    email:"",
    createdAt:""
  }
  response:ResponseUser
  constructor(private service:ProdutosService,private http:HttpClient,) { }

  ngOnInit() {
  }
  cadastrar(form){
    // this.service.cadastrar(this.request).subscribe(res=>{
    //     this.response=res;
    //     console.log(res);
    // })
    console.log(form)
  }
  // // consultaCep(cep){
  // //   cep = cep.replace(/\D/g, '');
  // //   if (cep != "") {
  // //     var validacep = /^[0-9]{8}$/;
  // //     if(validacep.test(cep)) {
  // //       this.http.get(`https://viacep.com.br/ws/ ${cep} /json/`)
  // //       .pipe(dados=>dados.json())
  // //       .subscribe(dados=>console.log(dados));
  // //     }
  // //   }
  // }
  
}
