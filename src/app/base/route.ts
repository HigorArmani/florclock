import { Routes } from "@angular/router"
import { RhFuncionarioComponent } from '../rh/rh-funcionario/rh-funcionario.component'
import { RhDashboardComponent } from '../rh/rh-dashboard/rh-dashboard.component'

export const ROUTES: Routes = [
    { path: "", component: RhDashboardComponent },
    { path: "rh/funcionarios", component: RhFuncionarioComponent }
]