import { ResponseUser } from './../user.model';
import * as jwt_decode from 'jwt-decode';


import { Component, OnInit } from '@angular/core';

import { ProdutosService } from '../services/produtos.service';
import { o } from 'odata';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css']
})
export class ListagemComponent implements OnInit {
  // lista: ResponseUser;
  listaVazia:boolean;
  lista:Array<any>;
  mensagem ="NENHUM COLABORADOR CADASTRADO";
  constructor(private ProdutosService: ProdutosService,private toastr:ToastrService) { }

  ngOnInit() {
    // this.listar();
    this.decoded();
  }
  quant:number;
  listar() {
    let url = "http://5d7bcea76b8ef80014b29752.mockapi.io/api/brq/experiencias";
    const response = o(url)
    .get()
    .query()
    .then(data=>{
      this.lista=data,
      console.log(this.lista),
      this.quant=data.length;
      if (this.quant==0) {
        this.toastr.info("Nenhuma Experiência")
      }else{
      this.toastr.success("aaa","Sucesso")
      }
    })
    .catch(err=>{
      this.toastr.error(err,"Erro")
    })
    
    
   
  }
  decoded() {
    let token = localStorage.getItem('token');
    let decode = jwt_decode(token);
    let nome = decode.nome;
    console.log(decode);
    console.table(nome);
    return nome;
  }

}
