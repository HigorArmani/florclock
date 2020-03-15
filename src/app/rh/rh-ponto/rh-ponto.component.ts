import { Component, ViewChild } from '@angular/core'
import { PATH_IMG_PROFILE } from 'src/app/base/api'
import { BaseAbstractComponent } from 'src/app/base/base-abstracts/base-abstract-component'
import { BaseServiceInterface } from 'src/app/base/base-interfaces/base-service.interface'
import { RhPontoService } from './rh-ponto.service'
import { RhPontoInterface } from './rh-ponto.interface'
import { RhPontoFormComponent } from './rh-ponto-form/rh-ponto-form.component'

@Component({
  selector: 'fclock-rh-ponto',
  templateUrl: './rh-ponto.component.html'
})
export class RhPontoComponent extends BaseAbstractComponent {

  @ViewChild('form') form: RhPontoFormComponent

  readonly pathImg = PATH_IMG_PROFILE

  data: RhPontoInterface[]

  constructor(private pontoService: RhPontoService) {
    super()
  }

  ngOnInit(){
    setTimeout(() => this.listeners())
  }
  
  getService(): BaseServiceInterface {
    return this.pontoService
  }

}