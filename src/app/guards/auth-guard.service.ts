import { ProdutosService } from './../services/produtos.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRoute, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuardService implements CanActivate{

  constructor(private service:ProdutosService,private router:Router) {

   }
   canActivate(
    route:ActivatedRouteSnapshot,
    state:RouterStateSnapshot,
   ):Observable<boolean> | boolean{
    if (this.service.Autenticado()) {
      return true;
    }
    else{
      this.router.navigate(['/login']);
      return false;
    }
   }
}
