import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';
import { MessageService } from '../core/message/message.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
 
  public user:any;
  constructor(private authService: AuthService,
              private router: Router,
              private messageService: MessageService) { }

  ngOnInit() {
    this.user={};
  }

  public enviar(form: NgForm){

    if(form.valid){
      this.authService.login(this.user).subscribe(data=>{
        console.log(data);
        this.authService.setSession(data);
        this.router.navigate(['/'])
      },error=>{
        this.messageService.addMsgDanger("MSG_CPF_SENHA_INCORRETO")
      })
    }
  }

}
