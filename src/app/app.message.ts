import { MessageResource } from './core/message/message.resource';
import { ValidationResource } from './core/validation/validation.resource';

/**
 * Implementação responsável por prover as 'descrições' e 'mensagens' utilizadas na aplicação em um único local.
 *
 * @author Squadra Tecnologia
 */
export class AppMessage implements MessageResource, ValidationResource {

  private resource: Object;

  /**
   * Construtor da classe.
   */
  constructor() {
    this.resource = {
      'LABEL_CONFIRM_OK': 'Ok',
      'LABEL_CONFIRM_YES': 'Sim',
      'LABEL_CONFIRM_NO': 'Não',

      'MSG_CPF_INVALIDO': 'O CPF informado é inválido.',

      'MSG_REGISTRO_NAO_ENCONTRADO': 'Nenhum registro encontrado.',
      'MSG_REGISTRO_INCLUIDO_SUCESSO': 'Registro incluído com sucesso.',
      'MSG_ERRO_INCLUIR': 'Erro ao incluir registro. Favor contactar o administrador.',
      'MSG_REGISTRO_ALTERADO_SUCESSO': 'Registro alterado com sucesso.',
      'MSG_ERRO_ALTERAR': 'Erro ao alterar registro. Favor contactar o administrador.',
      'MSG_REGISTRO_EXCLUIDO_SUCESSO': 'Registro excluído com sucesso.',
      'MSG_ERRO_EXCLUIR': 'Erro ao excluir registro. Favor contactar o administrador.',
      'MSG_DESEJA_SAIR_SISTEMA': 'Deseja realmente sair do sistema?',
      'MSG_REGISTRO_CONFIRMA_EXCLUSAO': 'Tem certeza que deseja excluir o registro?',
      'MSG_CPF_SENHA_INCORRETO': 'CPF e Senha inválidos',

      'required': 'Campo de preenchimento obrigatório.',
      'maxlength': 'Total de caracteres excede o tamanho máximo.',
    };
  }

  /**
   * Retorna a 'descrição' conforme a 'chave' informada.
   *
   * @param key
   * @returns
   */
  getDescription(key: string): string {
    return this.resource[key];
  }

  /**
   * Retorna a 'mensagem' conforme a 'chave' informada.
   *
   * @param key
   * @returns
   */
  getMessage(key: string): string {
    return this.getDescription(key);
  }
}
