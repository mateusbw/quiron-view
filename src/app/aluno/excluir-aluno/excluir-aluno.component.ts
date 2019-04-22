import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConstantPool } from '@angular/compiler';
import { AlunoService } from 'src/app/service/aluno.service';
import { MessageService } from 'src/app/core/message/message.service';

@Component({
  selector: 'app-excluir-aluno',
  templateUrl: './excluir-aluno.component.html',
  styleUrls: ['./excluir-aluno.component.sass']
})
export class ExcluirAlunoComponent implements OnInit {

  public aluno:any = {};
  constructor(route: ActivatedRoute,
              private router: Router,
              private alunoService: AlunoService, 
              private messageService: MessageService) { 
    const alunoId = route.snapshot.params['id'];
    this.alunoService.buscarAluno(alunoId).subscribe(data=>{
      this.aluno = data;
    })

  }

  ngOnInit() {
    
  }

  public excluir(){
    this.messageService.addConfirmYesNo("MSG_REGISTRO_CONFIRMA_EXCLUSAO",()=>{
      console.log("Excluir");
      this.alunoService.excluirAluno(this.aluno.id).subscribe(data=>{
        this.router.navigate(['/aluno']);
        this.messageService.addMsgSuccess("MSG_REGISTRO_EXCLUIDO_SUCESSO");
      },error=>{
        this.messageService.addMsgDanger("MSG_ERRO_EXCLUIR");
        console.log(error)
      })
    })
  }

}
