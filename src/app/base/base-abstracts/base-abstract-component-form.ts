import { BaseComponentFormInterface } from '../base-interfaces/base-component-form.interface'
import { ViewChild, EventEmitter } from '@angular/core'
import { FormGroup } from '@angular/forms'
import { BaseModalComponent } from '../base-modal/base-modal.component'
import { BaseServiceInterface } from '../base-interfaces/base-service.interface'
import { BaseResourceInterface } from '../base-interfaces/base-resource.interface'

const METHOD = {
    POST: 1,
    PUT: 2
}

export abstract class BaseAbstractComponentForm implements BaseComponentFormInterface {

    abstract getService(): BaseServiceInterface
    abstract buildForm(): FormGroup

    eventPost = new EventEmitter
    eventPut = new EventEmitter

    public method: number
    public id: number

    @ViewChild('modalForm') baseModal: BaseModalComponent

    form: FormGroup

    ngOnInit() {
        this.form = this.buildForm()
    }

    post() {
        this.getService()
            .post(this.form.value)
            .subscribe((res: BaseResourceInterface) => {
                this.baseModal.closeModal(),
                this.eventPost.emit(res)
            })
    }

    put() {
        this.getService()
            .put(this.form.value, this.id)
            .subscribe((res: BaseResourceInterface) => {
                this.baseModal.closeModal(),
                this.eventPut.emit(res)
            })
    }

    // Função para abrir o modal
    openModal(data?: BaseResourceInterface) {

        if (data) {
            this.id = data.id
            this.method = METHOD.PUT
            this.form.patchValue(data) // Databind dos dados para o formulario
        } else {
            this.method = METHOD.POST
            this.form.reset()
        }

        this.baseModal.openModal()
    }

    // Função para fechar o modal
    closeModal() {
        this.baseModal.closeModal
        this.form.reset()
    }

    // Ao salvar os dados do formulario
    onSubmit() {
        if (this.method == METHOD.POST) {
            this.post()
        } else if (this.method == METHOD.PUT) {
            this.put()
        }
    }
}