import { ResponseUser } from './../user.model';


import { Component, OnInit } from '@angular/core';

import { ProdutosService } from '../services/produtos.service';
import { o } from 'odata';
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
  constructor(private ProdutosService: ProdutosService) { }

  ngOnInit() {
    this.listar();
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
        this.listaVazia=true;
      }

    })
    
   
  }

}
