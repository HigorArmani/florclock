import { Component } from '@angular/core'
import { BaseAbstractComponent } from 'src/app/base/base-abstracts/base-abstract-component'
import { BaseServiceInterface } from 'src/app/base/base-interfaces/base-service.interface'
import { RhEscalaService } from '../rh-escala/rh-escala.service'
import { RhEscalaInterface } from '../rh-escala/rh-escala.interface'

@Component({
  selector: 'fclock-rh-escala',
  templateUrl: './rh-escala.component.html'
})
export class RhEscalaComponent extends BaseAbstractComponent {

  data: RhEscalaInterface[]

  constructor(private escalaService: RhEscalaService) {
    super()
  }

  getService(): BaseServiceInterface {
    return this.escalaService
  }

}