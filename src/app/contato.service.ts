import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContatoService {
  contatosUrl ="https://api.github.com/users/enzopanebianco/repos";
  constructor(private http:HttpClient) { }
  listar(){
    return this.http.get<any[]>(`${this.contatosUrl}`);
  }
}
