import { ResponseUser } from './../user.model';


import { Component, OnInit } from '@angular/core';
import { ContatoService } from '../contato.service';
import { ProdutosService } from '../services/produtos.service';
@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css']
})
export class ListagemComponent implements OnInit {
  contatos: ResponseUser;
  listaVazia:number;
  mensagem ="NENHUM COLABORADOR CADASTRADO";
  constructor(private ProdutosService: ProdutosService) { }

  ngOnInit() {
    this.listar();
  }
  listar() {
    this.ProdutosService.listar().subscribe(dados => {
    this.contatos = dados
    this.listaVazia=dados.length
       
    if (this.listaVazia==0) {
      return this.mensagem;
    }
    });
    console.log(this.contatos);
  }

}
