import { Guard } from './guards/authcandeactivate';
import { AuthGuardService } from './guards/auth-guard.service';
import { FormmoduleModule } from './cadastrar/formmodule.module';
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
import { AboutComponent } from './pages/about/about.component';
import { EditarComponent } from './editar/editar.component'
import { FormsModule }   from '@angular/forms';
import { ListIDComponent } from './list-id/list-id.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { FormDebugComponent } from './form-debug/form-debug.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ErrorMessageComponent } from './error-message/error-message.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    AppComponent,
    ListagemComponent,
    CabecalhoComponent,
    HomeComponent,
    AboutComponent,
    EditarComponent,
    ListIDComponent,
    LoginComponent,
    ErrorMessageComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
    ,HttpClientModule,
    MatProgressSpinnerModule,
    FormmoduleModule,
    
    BrowserAnimationsModule
  ],
  providers: [ContatoService,ProdutosService,AuthGuardService,Guard,LoginComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
