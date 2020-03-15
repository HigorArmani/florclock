import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RhFuncionarioComponent } from './rh-funcionario/rh-funcionario.component'
import { RhDashboardComponent } from './rh-dashboard/rh-dashboard.component'
import { RhDashboardStatusComponent } from './rh-dashboard/rh-dashboard-status/rh-dashboard-status.component'
import { HttpClientModule } from '@angular/common/http'
import { ReactiveFormsModule } from '@angular/forms'
import { BaseModule } from '../base/base.module'
import { RhFuncionarioFormComponent } from './rh-funcionario/rh-funcionario-form/rh-funcionario-form.component'
import { RhPontoComponent } from './rh-ponto/rh-ponto.component'
import { RhPontoFormComponent } from './rh-ponto/rh-ponto-form/rh-ponto-form.component'
import { RhFuncionarioDeleteComponent } from './rh-funcionario/rh-funcionario-delete/rh-funcionario-delete.component'
import { RhPontoDeleteComponent } from './rh-ponto/rh-ponto-delete/rh-ponto-delete.component'
import { RhEscalaComponent } from './rh-escala/rh-escala.component'
import { RhEscalaFormComponent } from './rh-escala/rh-escala-form/rh-escala-form.component'

const COMPONENTS = [
  RhDashboardComponent,
  RhDashboardStatusComponent,
  RhFuncionarioComponent,
  RhFuncionarioFormComponent,
  RhFuncionarioDeleteComponent,
  RhPontoDeleteComponent,
  RhEscalaComponent,
  RhEscalaFormComponent,
  RhPontoComponent,
  RhPontoFormComponent,
]

@NgModule({
  declarations: [COMPONENTS],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    BaseModule
  ],
  exports: [
    COMPONENTS
  ],
})
export class RhModule { }