import { ResponseUser } from './../user.model';


import { Component, OnInit } from '@angular/core';

import { ProdutosService } from '../services/produtos.service';
@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css']
})
export class ListagemComponent implements OnInit {
  // lista: ResponseUser;
  listaVazia:number;
  lista:Array<any>;
  mensagem ="NENHUM COLABORADOR CADASTRADO";
  constructor(private ProdutosService: ProdutosService) { }

  ngOnInit() {
    this.listar();
  }
  listar() {
    this.ProdutosService.listar().subscribe(dados => {
    this.lista = dados
    this.listaVazia=dados.length
       
   
    console.log(this.lista);
    });
  }

}
