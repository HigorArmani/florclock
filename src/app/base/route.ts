import { Routes } from "@angular/router"
import { RhFuncionarioComponent } from '../rh/rh-funcionario/rh-funcionario.component'
import { RhDashboardComponent } from '../rh/rh-dashboard/rh-dashboard.component'
import { RhEscalaComponent } from '../rh/rh-escala/rh-escala.component'
import { RhPontoComponent } from '../rh/rh-ponto/rh-ponto.component'

export const ROUTES: Routes = [
    { path: "", component: RhDashboardComponent },
    { path: "rh/funcionarios", component: RhFuncionarioComponent },
    { path: "rh/escalas", component: RhEscalaComponent },
    { path: "rh/pontos", component: RhPontoComponent },
]