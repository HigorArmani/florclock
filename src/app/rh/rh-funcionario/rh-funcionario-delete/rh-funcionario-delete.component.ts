import { Component, EventEmitter, Output, ViewChild } from '@angular/core'
import { RhFuncionarioService } from '../rh-funcionario.service'
import { BaseServiceInterface } from 'src/app/base/base-interfaces/base-service.interface'
import { BaseModalComponent } from 'src/app/base/base-modal/base-modal.component'
import { BaseAbstractComponentDelete } from 'src/app/base/base-abstracts/base-abstract-component-delete'

@Component({
  selector: 'fclock-rh-funcionario-delete',
  templateUrl: './rh-funcionario-delete.component.html'
})
export class RhFuncionarioDeleteComponent extends BaseAbstractComponentDelete {

  @ViewChild('modalDelete') modalDelete: BaseModalComponent
  @Output() eventDelete = new EventEmitter

  id: number

  constructor(private funcionarioService: RhFuncionarioService) {
    super()
   }

  getService(): BaseServiceInterface {
    return this.funcionarioService
  }

}