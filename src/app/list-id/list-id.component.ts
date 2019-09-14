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
  request:ResponseUser;
  constructor(private service:ProdutosService,private route:ActivatedRoute) { }

  ngOnInit() {
    this.listarporid();
  }
  listarporid(){
    this.id = this.route.snapshot.paramMap.get('id');
    this.service.listarId(this.id).subscribe(res=>{
      this.request ={
        id:res.id,
        name: res.name,
        email:res.email,
        createdAt:res.createdAt
      }
      
      console.log(this.request);
    });
  }
}
