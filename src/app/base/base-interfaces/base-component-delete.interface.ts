import { EventEmitter } from '@angular/core'
import { BaseModalComponent } from '../base-modal/base-modal.component'
import { BaseServiceInterface } from './base-service.interface'
import { BaseResourceInterface } from './base-resource.interface'

/**
 * Interface de componentes de delete
 */
export interface BaseComponentDeleteInterface {

    modalDelete: BaseModalComponent
    eventDelete: EventEmitter<BaseResourceInterface>

    getService(): BaseServiceInterface

    // Função para abrir o modal
    openModal(id: string)

    // Função para o delete
    onDelete()
}