import { ResponseUpdate, RequestUpdate, ResponseUser } from './../user.model';
import { ActivatedRoute } from '@angular/router';
import { ProdutosService } from './../services/produtos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-id',
  templateUrl: './list-id.component.html',
  styleUrls: ['./list-id.component.css']
})
export class ListIDComponent implements OnInit {
  id:string;
  request:Array<any>;
  nome2:string;
  listaVazia:number;
  mensagem ="NENHUM COLABORADOR CADASTRADO";
  constructor(private service:ProdutosService,private route:ActivatedRoute) { }

  ngOnInit() {
    this.listarporid();
  }
  listarporid(){
    this.id = this.route.snapshot.paramMap.get('id');
    this.service.listarId(this.id).subscribe(res=>{
      this.request=res,
      this.listaVazia=res.length
       
      if (this.listaVazia==0) {
        return this.mensagem;
      }
      
      console.log(this.request);
      
    });
  }
}
