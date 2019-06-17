import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
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
              private messageService: MessageService,
              private location: Location) { }

  ngOnInit() {
    this.user={};
  }

  public enviar(form: NgForm){
    if(form.valid){
      this.authService.login(this.user);
    }
  }

  public logarAluno(){
      this.authService.loginAluno();
      window.location.href = "http://localhost:4200/";
  }

}
