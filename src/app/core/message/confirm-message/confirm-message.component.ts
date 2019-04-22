import { Component } from '@angular/core';
import { MessageService, MessageItem } from '../message.service';

import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

/**
 * Implementação de 'component' responsável por gerar a estrutura 'html' o modal confirm serão gerados.
 *
 * @author Squadra Tecnologia
 */
@Component({
  selector: 'confirm-message',
  template: `<div *ngFor="let item of items" class="modal fade" bsModal #confirm="bs-modal" [config]="{backdrop: 'static', keyboard: false, show: true}" 
                  tabindex="-1" role="dialog" aria-labelledby="dialog-static-name">
              <div class="modal-dialog modal-sm" style="margin-top: 10%;">
                <div class="modal-content">
                  <div class="modal-header">
                    <h6 class="modal-title">{{'LABEL_CONFIRM_TITLE' | i18n}}</h6>
                  </div>
                  <div class="modal-body">{{item.msg}}</div>
                  <div class="modal-footer">
                    <div class="text-center" *ngIf="item.isConfirmTypeOk()">
                      <button type="button" class="btn btn-primary" (click)="confirmYesOk(item, confirm)">{{'LABEL_CONFIRM_OK' | i18n}}</button>
                    </div>
                    <div class="text-center" *ngIf="item.isConfirmTypeYesNo()">
                      <button type="button" class="btn btn-primary mr-1" (click)="confirmYesOk(item, confirm)">{{'LABEL_CONFIRM_YES' | i18n}}</button>
                      <button type="button" class="btn btn-primary" (click)="confirmNo(item, confirm)">{{'LABEL_CONFIRM_NO' | i18n}}</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>`
})
export class ConfirmMessageComponent {

  public items: MessageItem[];
  private messageService: MessageService;

  /**
   * Construtor da classe.
   * 
   * @param modalService 
   * @param messageService 
   */
  constructor(messageService: MessageService) {
    this.items = [];
    this.messageService = messageService;
    this.messageService.getConfirmEmitter().subscribe(item => this.addConfirmItem(item));
  }

  /**
   * Adiciona o modal de confirmação a view.
   *
   * @param messageItem
   */
  private addConfirmItem(messageItem: MessageItem): void {
    let count = this.items.filter(item => item.msg === messageItem.msg).length;

    if (count === 0) {
      this.items.push(messageItem);
    }
  }

  /**
   * Remove o item de confirmação da view.
   *
   * @param messageItem
   */
  private removeConfirm(messageItem: MessageItem): void {
    this.items = this.items.filter(item => item.msg !== messageItem.msg);
  }

  /**
   * Executa o callback para as ações 'YES/OK'.
   *
   * @param messageItem
   * @param confirm
   */
  public confirmYesOk(messageItem: MessageItem, confirm: BsModalRef): void {
    confirm.hide();
    messageItem.executYesOk();
    this.removeConfirm(messageItem);
  }

  /**
   * Executa o callback para a ação 'NO'.
   *
   * @param messageItem
   * @param confirm
   */
  public confirmNo(messageItem: MessageItem, confirm: BsModalRef): void {
    confirm.hide();
    messageItem.executNo();
    this.removeConfirm(messageItem);
  }
}