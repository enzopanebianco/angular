import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListagemComponent } from './listagem/listagem.component';
import {ContatoService} from './contato.service';
import {ProdutosService} from './services/produtos.service';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component'

@NgModule({
  declarations: [
    AppComponent,
    ListagemComponent,
    CabecalhoComponent,
    HomeComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
    ,HttpClientModule
  ],
  providers: [ContatoService,ProdutosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
