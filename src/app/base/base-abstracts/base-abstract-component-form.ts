import { BaseComponentFormInterface } from '../base-interfaces/base-component-form.interface'
import { ViewChild, EventEmitter, Input } from '@angular/core'
import { FormGroup } from '@angular/forms'
import { BaseModalComponent } from '../base-modal/base-modal.component'
import { BaseServiceInterface } from '../base-interfaces/base-service.interface'
import { BaseResourceInterface } from '../base-interfaces/base-resource.interface'
import { HTTP } from '../base-cons'

export abstract class BaseAbstractComponentForm implements BaseComponentFormInterface {

    abstract getService(): BaseServiceInterface
    abstract buildForm(): FormGroup

    eventPost = new EventEmitter
    eventPut = new EventEmitter

    public method: number
    public id: number

    afterModalFormOpen = () => {}

    @Input() width = null

    /**
     * Correto aqui seria BaseModalComponentInterface, para a demo deixarei assim
     */
    @ViewChild('modalForm') baseModal: BaseModalComponent

    form: FormGroup

    ngOnInit() {
        this.form = this.buildForm()
    }

    post(data = null) {

        let postData = this.form.value
        if (data != null) {
            postData = data
        }

        this.getService()
            .post(postData)
            .subscribe((res: BaseResourceInterface) => {
                this.baseModal.closeModal(),
                this.eventPost.emit(res)
            })
    }

    put(data = null) {

        let putData = this.form.value
        if (data != null) {
            putData = data
        }

        this.getService()
            .put(putData, this.id)
            .subscribe((res: BaseResourceInterface) => {
                this.baseModal.closeModal(),
                this.eventPut.emit(res)
            })
    }

    // Função para abrir o modal
    openModal(data?: BaseResourceInterface) {

        if (data) {
            this.id = data.id
            this.method = HTTP.REQUEST.PUT
            this.form.patchValue(data) // Databind dos dados para o formulario
        } else {
            this.method = HTTP.REQUEST.POST
            this.form.reset()
        }

        this.baseModal.openModal()

        this.afterModalFormOpen()
    }

    // Função para fechar o modal
    closeModal() {
        this.baseModal.closeModal
        this.form.reset()
    }

    // Ao salvar os dados do formulario
    onSubmit() {
        if (this.method == HTTP.REQUEST.POST) {
            this.post()
        } else if (this.method == HTTP.REQUEST.PUT) {
            this.put()
        }
    }
}