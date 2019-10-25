
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RequestUpdate, ResponseUpdate, ResponseUser, RequestUser, RequestLogin, ResponseLogin } from '../user.model';
@Injectable({
  providedIn: 'root'
})
export class ProdutosService {
  produtosUrl="http://localhost:3001/api/products";
  loginUrl="http://localhost:3001/api/login";
  constructor(private http:HttpClient) { }
  listar(){
    return this.http.get<any[]>(`${this.produtosUrl}`);
  }
  atualizar(id:string,request:RequestUpdate):Observable<ResponseUpdate>{
    const _url = `${this.produtosUrl}/${id}`
    return this.http.put<ResponseUpdate>(_url,request);
  }
  listarId(id:string):Observable<any[]>{
    const _url = `${this.produtosUrl}/${id}`
    return this.http.get<any[]>(_url);
  }
  cadastrar(request:RequestUser):Observable<ResponseUser>{
    return this.http.post<ResponseUser>(this.produtosUrl,request);
  }
  login(usuario:RequestLogin):Observable<ResponseLogin>{
   return this.http.post<ResponseLogin>(this.loginUrl,usuario);
  }
}
