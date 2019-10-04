import { ProdutosService } from './../services/produtos.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RequestUpdate } from '../user.model';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {
  id:string;
  request:RequestUpdate;
  constructor(private service:ProdutosService,private route:ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.service.listarId(this.id).subscribe(res=>{
      
      console.log(this.request)
    });
  }
  update(){
    this.service.atualizar(this.id,this.request).subscribe(res=>{
      alert(`Atualizado ${res.createdAt},Nome ${res.name} , Email ${res.email} `)
    });
  }

}
