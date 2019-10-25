import { LoginComponent } from './login/login.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { ListagemComponent } from './listagem/listagem.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent  } from "./pages/home/home.component";
import { AboutComponent } from './pages/about/about.component';
import { EditarComponent } from './editar/editar.component';
import { ListIDComponent } from './list-id/list-id.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'listagem',component:ListagemComponent},
  {path:'listagem/:id',component:ListIDComponent},
  {path:'about',component:AboutComponent},
  {path:'cadastrar',component:CadastrarComponent},
  {path:'users/update/:id',component:EditarComponent},
  {path:'login',component:LoginComponent}
];

@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
