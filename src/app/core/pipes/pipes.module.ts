import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PontuacaocpfPipe } from './pontuacaocpf.pipe';


/**
 * Módulo responsável por prover recursos para simplificar a validação de campos nos formulários do sistema.
 *
 * @author Squadra Tecnologia
 */
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PontuacaocpfPipe],
  exports: [PontuacaocpfPipe]
})
export class PipesModule { }
