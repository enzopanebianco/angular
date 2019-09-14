import { Component, OnInit } from '@angular/core';
import { RequestUser, ResponseUser } from '../user.model';
import { ProdutosService } from '../services/produtos.service';

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
