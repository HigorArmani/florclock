import { Component } from '@angular/core'
import { FormGroup, FormControl } from '@angular/forms'
import { BaseAbstractComponentForm } from 'src/app/base/base-abstracts/base-abstract-component-form'
import { BaseServiceInterface } from 'src/app/base/base-interfaces/base-service.interface'
import { RhPontoService } from '../rh-ponto.service'
import { HttpParams } from '@angular/common/http'
import { RhPontoInterface } from '../rh-ponto.interface'
import { HTTP } from 'src/app/base/base-cons'

@Component({
  selector: 'fclock-rh-ponto-form',
  templateUrl: './rh-ponto-form.component.html'
})
export class RhPontoFormComponent extends BaseAbstractComponentForm {

  constructor(private pontoService: RhPontoService) {
    super()
  }

  getService(): BaseServiceInterface {
    return this.pontoService
  }

  buildForm() {
    return new FormGroup({
      hrEntrada: new FormControl(null),
      hrEntradaAlmoco: new FormControl(null),
      hrSaidaAlmoco: new FormControl(null),
      hrSaida: new FormControl(null),
      data: new FormControl(null),
      rhFuncionario: new FormControl(null),
    })
  }

  onPatchDate(date: string) {

    let params = (new HttpParams)
      .set('data[eq]', `${date}`)
      .set('rhFuncionario[eq]', `${this.form.value.rhFuncionario.id}`)

    this.getService()
      .getList(params)
      .subscribe((res: RhPontoInterface[]) => {
        if (res.length) {

          this.form.patchValue(res[0])

          if (res) {
            this.id = res[0].id
            this.method = HTTP.REQUEST.PUT
          }
        }
      })
  }

  // Função para abrir o modal
  openModal(data?: RhPontoInterface) {
    super.openModal(data)

    if (this.method == HTTP.REQUEST.POST) {
      this.form.patchValue({ data: new Date().toISOString().substr(0, 10) })
    } else {
      this.form.patchValue({ data: new Date(data.data).toISOString().substr(0, 10) })
    }
  }

}