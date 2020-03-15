import { Component } from '@angular/core'
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { BaseAbstractComponentForm } from 'src/app/base/base-abstracts/base-abstract-component-form'
import { BaseServiceInterface } from 'src/app/base/base-interfaces/base-service.interface'
import { HTTP } from 'src/app/base/base-cons'
import { BaseDiaInterface } from 'src/app/base/base-interfaces/base.interface'
import { BaseDiaService } from 'src/app/base/base-service/base-dia-service'
import { RhEscalaInterface } from '../../rh-escala/rh-escala.interface'
import { RhEscalaService } from '../../rh-escala/rh-escala.service'
import { RhHorarioInterface } from '../../rh-horario/rh-horario.interface'

@Component({
  selector: 'fclock-rh-escala-form',
  templateUrl: './rh-escala-form.component.html'
})
export class RhEscalaFormComponent extends BaseAbstractComponentForm {

  public baseDias: BaseDiaInterface[]
  public rhEscala: RhEscalaInterface
  public rhHorarios: RhHorarioInterface[] = []

  public tabSelected: BaseDiaInterface

  constructor(
    private escalaService: RhEscalaService,
    private baseDiaService: BaseDiaService
  ) {
    super()
  }

  ngOnInit() {
    super.ngOnInit()

    this.baseDiaService
      .getList()
      .subscribe((res: BaseDiaInterface[]) => this.baseDias = res)
  }

  getService(): BaseServiceInterface {
    return this.escalaService
  }

  buildForm() {
    return new FormGroup({
      nome: new FormControl(null, { validators: [Validators.required, Validators.minLength(3)] }),
    })
  }

  onSelectTab(dia: BaseDiaInterface) {
    this.tabSelected = dia
  }

  patchEntrada(hora: string, index: number) {
    this.rhHorarios[index].hrEntrada = hora
  }

  patchSaida(hora: string, index: number) {
    this.rhHorarios[index].hrSaida = hora
  }

  // Função para abrir o modal
  openModal(data?: RhEscalaInterface) {
    this.rhHorarios = []

    this.baseDias.forEach((baseDia: BaseDiaInterface) => this.rhHorarios.push({ hrEntrada: "08:00", hrSaida: "18:00", baseDia: baseDia }))

    this.tabSelected = this.baseDias[0]
    super.openModal()
  }

  // Ao salvar os dados do formulario
  onSubmit() {

    this.rhEscala = { nome: this.form.value.nome, rhHorarios: this.rhHorarios }

    if (this.method == HTTP.REQUEST.POST) {
      this.post(this.rhEscala)
    }
  }

}