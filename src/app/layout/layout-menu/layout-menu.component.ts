import { Component, OnInit } from '@angular/core'
import { FONTAWESOME } from '../cons'
import { Router } from '@angular/router'

@Component({
  selector: 'fclock-layout-menu',
  templateUrl: './layout-menu.component.html'
})
export class LayoutMenuComponent {

  constructor(private router: Router) { }

  // Opções do menu
  menuOpts: OptMenu[] = [
    {
      icon: FONTAWESOME.ICON.DASHBOARD,
      title: "Dashboard",
      urlRouter: ""
    },
    {
      icon: FONTAWESOME.ICON.USER,
      title: "Funcionários",
      urlRouter: "rh/funcionarios"
    },
    {
      icon: FONTAWESOME.ICON.CLOCK,
      title: "Ponto",
      urlRouter: ""
    }
  ]

  // Opção selecionada
  optSelected: OptMenu = this.menuOpts[0]

  onSelect(opt: OptMenu) {
    this.optSelected = opt

    this.router.navigate([opt.urlRouter])
  }

}

interface OptMenu {
  icon: string
  title: string
  urlRouter: string
}