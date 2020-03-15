import { Component, OnInit, ViewChild } from '@angular/core'
import { RhFuncionarioService } from './rh-funcionario.service'
import { PATH_IMG_PROFILE } from 'src/app/base/api'
import { RhFuncionario } from './rh-funcionario'
import { RhFuncionarioFormComponent } from './rh-funcionario-form/rh-funcionario-form.component'
import { BaseAbstractComponent } from 'src/app/base/base-abstracts/base-abstract-component'
import { BaseServiceInterface } from 'src/app/base/base-interfaces/base-service.interface'

@Component({
  selector: 'fclock-rh-funcionario',
  templateUrl: './rh-funcionario.component.html'
})
export class RhFuncionarioComponent extends BaseAbstractComponent implements OnInit {

  @ViewChild('form') form: RhFuncionarioFormComponent

  readonly pathImg = PATH_IMG_PROFILE

  data: RhFuncionario[]

  constructor(private funcionarioService: RhFuncionarioService) {
    super()
  }

  getService(): BaseServiceInterface {
    return this.funcionarioService
  }

}