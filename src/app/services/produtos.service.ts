import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProdutosService {
  produtosUrl="http://localhost:3001/api/products";

  constructor(private http:HttpClient) { }
  listar(){
    return this.http.get<any[]>(`${this.produtosUrl}`);
  }
}
