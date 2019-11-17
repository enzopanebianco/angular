import { Skill } from './../user.model';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RequestUser, ResponseUser } from '../user.model';
import { ProdutosService } from '../services/produtos.service';
import {map} from "rxjs/operators";
import { o } from 'odata';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  request:Skill={
    idSkill: '',
    nome: '',
    idTipoSkill: ''

  }
  response:ResponseUser
  constructor(private service:ProdutosService,private http:HttpClient,private toastr:ToastrService) { }

  ngOnInit() {
  }
  cadastrar(form){
    const url = "https://5d7bcea76b8ef80014b29752.mockapi.io/api/brq/skill";
    o(url)
    .post('',this.request)
    .query()
    .then(data=>this.toastr.success(this.request.nome,"Skill Cadastrada"))
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
