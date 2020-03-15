import { ViewChild } from '@angular/core'
import { BaseComponentFormInterface } from '../base-interfaces/base-component-form.interface'
import { BaseResourceInterface } from '../base-interfaces/base-resource.interface'
import { BaseServiceInterface } from '../base-interfaces/base-service.interface'
import { BaseComponentInterface } from '../base-interfaces/base-component.interface'

export abstract class BaseAbstractComponent implements BaseComponentInterface {

  // Serviço padrão do projeto
  abstract getService(): BaseServiceInterface

  @ViewChild('form') form: BaseComponentFormInterface

  data: BaseResourceInterface[] = []

  ngOnInit(): void {
    this.getList()
    setTimeout(() => this.listeners())
  }

  getList() {
    this.getService()
      .getList()
      .subscribe((res: []) => this.data = res)
  }

  listeners() {
    // Espera pelo evento post do form
    this.form.eventPost.subscribe((res: BaseResourceInterface) => this.data.push(res))

    // Espera pelo evento put do form
    this.form.eventPut.subscribe(res => {
      let index = this.data.findIndex((r: BaseResourceInterface) => r.id == res.id)
      this.data[index] = res
    })
  }

}