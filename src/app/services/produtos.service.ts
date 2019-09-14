import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RequestUpdate, ResponseUpdate, ResponseUser, RequestUser } from '../user.model';
@Injectable({
  providedIn: 'root'
})
export class ProdutosService {
  produtosUrl="https://5d7bcea76b8ef80014b29752.mockapi.io/api/brq/users";

  constructor(private http:HttpClient) { }
  listar(){
    return this.http.get<any[]>(`${this.produtosUrl}`);
  }
  atualizar(id:string,request:RequestUpdate):Observable<ResponseUpdate>{
    const _url = `${this.produtosUrl}/${id}`
    return this.http.put<ResponseUpdate>(_url,request);
  }
  listarId(id:string):Observable<ResponseUser>{
    const _url = `${this.produtosUrl}/${id}`
    return this.http.get<ResponseUser>(_url);
  }
  cadastrar(request:RequestUser):Observable<ResponseUser>{
    return this.http.post<ResponseUser>(this.produtosUrl,request);
  }
}
