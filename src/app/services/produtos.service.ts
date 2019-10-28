import { o } from "odata";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as jwt from "jwt-decode";
import { RequestUpdate, ResponseUpdate, ResponseUser, RequestUser, RequestLogin, ResponseLogin } from '../user.model';
@Injectable({
  providedIn: 'root'
})
export class ProdutosService {
  produtosUrl = "http://localhost:3001/api/products";
  usuarioAutenticado: boolean;
  usuarioAutorizado: boolean;
  constructor(private http: HttpClient) { }
  listar() {
    return this.http.get<any[]>(`${this.produtosUrl}`);
  }
  atualizar(id: string, request: RequestUpdate): Observable<ResponseUpdate> {
    const _url = `${this.produtosUrl}/${id}`
    return this.http.put<ResponseUpdate>(_url, request);
  }
  listarId(id: string): Observable<any[]> {
    const _url = `${this.produtosUrl}/${id}`
    return this.http.get<any[]>(_url);
  }
  cadastrar(request: RequestUser): Observable<ResponseUser> {
    return this.http.post<ResponseUser>(this.produtosUrl, request);
  }
  
  // loginn(usuario:RequestLogin){
  //   if (usuario.email==='usuario@email.com'&&usuario.senha==="12345") {
  //     this.usuarioAutenticado=true;
  //     console.log("Funcionou!")
  //   } 
  //   else{
  //     this.usuarioAutenticado=false;
  //   }
  // }
  Autenticado() {
    let token = localStorage.getItem('token');
    let decode = jwt(token);
    if (token !== null) {
      this.usuarioAutenticado = true;
    }
    else {
      this.usuarioAutenticado = false;
    }

    return this.usuarioAutenticado;
  }
  Autorizado() {
    let token = localStorage.getItem('token');
    let decode = jwt(token);
    if (decode.tipoUsuario==true) {
        this.usuarioAutorizado=true;
    }
    else{
      this.usuarioAutorizado=false;
    }
    return this.usuarioAutorizado;
  }
}
