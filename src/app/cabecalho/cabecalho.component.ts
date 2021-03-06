import { ProdutosService } from './../services/produtos.service';
import { Component, OnInit } from '@angular/core';
import { RequestUser, ResponseUser } from '../user.model';

@Component({
  selector: 'app-cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrls: ['./cabecalho.component.css']
})
export class CabecalhoComponent implements OnInit {
  request:RequestUser={
    name:"",
    email:"",
    createdAt:""
  }
  response:ResponseUser
  constructor(private service:ProdutosService) { }

  ngOnInit() {
  }
  cadastrar(){
    this.service.cadastrar(this.request).subscribe(res=>{
        this.response=res;
        console.log(res);
    })
  }

}
