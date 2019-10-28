import { LoginComponent } from './../login/login.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error-message',
  templateUrl: './error-message.component.html',
  styleUrls: ['./error-message.component.css']
})
export class ErrorMessageComponent implements OnInit {
  erro:string;
  constructor(private loginErro:LoginComponent) { }

  ngOnInit() {
    this.loginErro.loginemiiter.subscribe(err=>{
      this.erro=err,
      console.log(this.erro)
    }
      )
  }

}
