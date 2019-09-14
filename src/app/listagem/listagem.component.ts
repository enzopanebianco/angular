

import { Component, OnInit } from '@angular/core';
import { ContatoService } from '../contato.service';
import {ProdutosService} from '../services/produtos.service';
@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css']
})
export class ListagemComponent implements OnInit {
  contatos:Array<any>;
  constructor(private ProdutosService:ProdutosService) { }

  ngOnInit() {
    this.listar();
  }
  listar(){
    this.ProdutosService.listar().subscribe(dados=>this.contatos=dados);
    console.log(this.contatos);
  }

}
