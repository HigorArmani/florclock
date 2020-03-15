import { Component } from '@angular/core'
import { BaseServiceInterface } from 'src/app/base/base-interfaces/base-service.interface'
import { RhPontoService } from '../rh-ponto.service'
import { BaseAbstractComponentDelete } from 'src/app/base/base-abstracts/base-abstract-component-delete'

@Component({
  selector: 'fclock-rh-ponto-delete',
  templateUrl: './rh-ponto-delete.component.html'
})
export class RhPontoDeleteComponent extends BaseAbstractComponentDelete {

  constructor(private rhPontoService: RhPontoService) {
    super()
   }

  getService(): BaseServiceInterface {
    return this.rhPontoService
  }

}