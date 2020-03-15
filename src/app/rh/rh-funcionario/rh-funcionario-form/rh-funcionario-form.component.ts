import { Component, OnInit } from '@angular/core'
import { RhFuncionarioService } from '../rh-funcionario.service'
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { BaseAbstractComponentForm } from 'src/app/base/base-abstracts/base-abstract-component-form'
import { BaseServiceInterface } from 'src/app/base/base-interfaces/base-service.interface'

@Component({
  selector: 'fclock-rh-funcionario-form',
  templateUrl: './rh-funcionario-form.component.html'
})
export class RhFuncionarioFormComponent extends BaseAbstractComponentForm implements OnInit {

  constructor(private funcionarioService: RhFuncionarioService) {
    super()
  }

  getService(): BaseServiceInterface {
    return this.funcionarioService
  }

  buildForm() {
    return new FormGroup({
      nome: new FormControl(null, { validators: [Validators.required, Validators.minLength(3)] }),
      rhEscala: new FormControl(null, { validators: [Validators.required] }),
    })
  }
}