import { Component, ViewChild } from '@angular/core'
import { RhFuncionarioService } from './rh-funcionario.service'
import { PATH_IMG_PROFILE } from 'src/app/base/api'
import { BaseAbstractComponent } from 'src/app/base/base-abstracts/base-abstract-component'
import { BaseServiceInterface } from 'src/app/base/base-interfaces/base-service.interface'
import { RhPontoComponent } from '../rh-ponto/rh-ponto.component'
import { RhFuncionarioInterface } from './rh-funcionario.interface'
import { BaseModalComponent } from 'src/app/base/base-modal/base-modal.component'
import { Router } from '@angular/router'
import { HttpParams } from '@angular/common/http'

@Component({
  selector: 'fclock-rh-funcionario',
  templateUrl: './rh-funcionario.component.html'
})
export class RhFuncionarioComponent extends BaseAbstractComponent {

  @ViewChild('rhPonto') rhPonto: RhPontoComponent
  @ViewChild('modalPonto') modalPonto: BaseModalComponent

  readonly pathImg = PATH_IMG_PROFILE

  data: RhFuncionarioInterface[]

  constructor(private funcionarioService: RhFuncionarioService, private router: Router) {
    super()
  }

  getService(): BaseServiceInterface {
    return this.funcionarioService
  }

  openPonto(rhFuncionario: RhFuncionarioInterface) {

    let params = (new HttpParams).set('rhFuncionario[eq]', `${rhFuncionario.id}`)

    this.rhPonto.getList(params)
    this.modalPonto.openModal()
    this.rhPonto.form.afterModalFormOpen = () => {
      this.rhPonto.form.form.patchValue({ rhFuncionario: rhFuncionario })
    }
  }

  listeners() {
    super.listeners()

    this.rhPonto.form.eventPost.subscribe(() => this.getList())
    this.rhPonto.form.eventPut.subscribe(() => this.getList())
  }

  onSearch(term: string){

    let params = (new HttpParams)
      .set("nome[search]", `${term}`)
      .set("rhEscala.nome[search]", `${term}`)
      .set("rhFuncionarioStatus.nome[search]", `${term}`)

    this.getList(params)
  }

}