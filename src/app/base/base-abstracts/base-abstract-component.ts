import { ViewChild } from '@angular/core'
import { BaseComponentFormInterface } from '../base-interfaces/base-component-form.interface'
import { BaseResourceInterface } from '../base-interfaces/base-resource.interface'
import { BaseServiceInterface } from '../base-interfaces/base-service.interface'
import { BaseComponentInterface } from '../base-interfaces/base-component.interface'
import { HttpParams, HttpHeaders } from '@angular/common/http'

export abstract class BaseAbstractComponent implements BaseComponentInterface {

  // Serviço padrão do projeto
  abstract getService(): BaseServiceInterface

  @ViewChild('form') form: BaseComponentFormInterface
  @ViewChild('modalDelete') modalDelete

  data: BaseResourceInterface[] = []

  ngOnInit(): void {
    this.getList()
    setTimeout(() => this.listeners())
  }

  getList(params?: HttpParams, headers?: HttpHeaders) {
    this.getService()
      .getList(params, headers)
      .subscribe((res: []) => this.data = res)
  }

  listeners() {
    if (this.form) {
      this.listenPost()
      this.listenPut()
    }

    if (this.modalDelete) {
      this.listenDelete()
    }
  }

  // Espera pelo evento delete
  private listenDelete() {
    this.modalDelete.eventDelete.subscribe((res: BaseResourceInterface) => {
      let index = this.data.findIndex(find => find.id == res.id)

      if (index >= 0)
        this.data.splice(index, 1)
    })
  }

  // Espera pelo evento put do form
  private listenPut() {
    this.form.eventPut.subscribe((res: BaseResourceInterface[]) => {
      let index = this.data.findIndex((r: BaseResourceInterface) => r.id == res[0].id)
      this.data[index] = res[0]
    })
  }

  // Espera pelo evento post do form
  private listenPost() {
    this.form.eventPost.subscribe((res: BaseResourceInterface[]) => this.data.unshift(res[0]))
  }

}