import { FormDebugComponent } from './../form-debug/form-debug.component';
import { CadastrarComponent } from './cadastrar.component';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [CadastrarComponent,FormDebugComponent],
  imports: [
    CommonModule,FormsModule
  ]
})
export class FormmoduleModule { }
