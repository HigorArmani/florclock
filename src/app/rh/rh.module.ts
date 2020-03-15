import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RhFuncionarioComponent } from './rh-funcionario/rh-funcionario.component'
import { RhDashboardComponent } from './rh-dashboard/rh-dashboard.component'
import { RhDashboardStatusComponent } from './rh-dashboard/rh-dashboard-status/rh-dashboard-status.component'
import { HttpClientModule } from '@angular/common/http'
import { ReactiveFormsModule } from '@angular/forms'
import { BaseModule } from '../base/base.module'
import { RhFuncionarioFormComponent } from './rh-funcionario/rh-funcionario-form/rh-funcionario-form.component'

const COMPONENTS = [
  RhDashboardComponent,
  RhDashboardStatusComponent,
  RhFuncionarioComponent,
  RhFuncionarioFormComponent
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