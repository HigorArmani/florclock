import { Component, EventEmitter, Input, Output } from '@angular/core'

@Component({
  selector: 'fclock-base-modal',
  templateUrl: './base-modal.component.html'
})
export class BaseModalComponent {

  // Para alterar o tamanho
  @Input() width = null
  @Input() isDisableSubmit = false
  @Input() btnStyle = "btn-primary"

  // Titulo do modal
  @Input() title = ""

  // Os eventos são disparados respectivamente a suas ações
  @Output() eventSubmit = new EventEmitter
  @Output() eventOpenModal = new EventEmitter
  @Output() eventCloseModal = new EventEmitter

  // Propriedade que armazena o status do modal
  isOpen = false

  // Ao abrir o modal
  openModal() {
    this.eventOpenModal.emit(true)
    this.isOpen = true
  }

  // Ao fechar o modal
  closeModal() {
    this.eventCloseModal.emit(true)
    this.isOpen = false
  }

  // Ao realizar o submit
  onSubmit() {
    this.eventSubmit.emit(true)
  }

}