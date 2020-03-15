import { ViewChild, Output, EventEmitter} from '@angular/core'
import { BaseComponentDeleteInterface } from '../base-interfaces/base-component-delete.interface'
import { BaseServiceInterface } from '../base-interfaces/base-service.interface'
import { BaseResourceInterface } from '../base-interfaces/base-resource.interface'
import { BaseModalComponent } from '../base-modal/base-modal.component'

export abstract class BaseAbstractComponentDelete implements BaseComponentDeleteInterface {

    @ViewChild('modalDelete') modalDelete: BaseModalComponent
    @Output() eventDelete = new EventEmitter
  
    id: number

    abstract getService(): BaseServiceInterface
  
    // Função para abrir o modal
    openModal(id) {
      this.modalDelete.openModal()
      this.id = id
    }
  
    onDelete() {
      this.getService()
        .delete(this.id)
        .subscribe( (res: BaseResourceInterface) => {
          this.eventDelete.emit(res)
          this.modalDelete.closeModal()
        })
    }
    
}