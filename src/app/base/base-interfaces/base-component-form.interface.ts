import { EventEmitter } from '@angular/core'
import { BaseModalComponent } from '../base-modal/base-modal.component'
import { FormGroup } from '@angular/forms'
import { BaseServiceInterface } from './base-service.interface'
import { BaseResourceInterface } from './base-resource.interface'

/**
 * Interface de componentes de form
 */
export interface BaseComponentFormInterface {

    /**
     * Component Base Modal, o ideal seria
     * que a propriedade fosse tipada com uma interface de BaseModal,
     * mas para fins demonstrativos não foi necessario
     */
    baseModal: BaseModalComponent

    // Evento após o post
    eventPost: EventEmitter<[]>

    // Evento após o put
    eventPut: EventEmitter<[]>

    // Propriedade para identificação do metodo
    method: number

    // ID para update quando metodo for um put
    id: number

    // Form com as propriedades de FormGroup
    form: FormGroup

    // Serviço padrão do projeto, obedecendo sua interface
    getService(): BaseServiceInterface

    // Construtor do form, geralmente usado para definir o valor do form
    buildForm(): FormGroup

    // Metodo de post
    post(): void

    // Metodo put
    put(): void

    // Função para abrir o modal
    openModal(data?: BaseResourceInterface): void

    // Função para fechar o modal
    closeModal(): void

    // Ao salvar os dados do formulario
    onSubmit(): void
}