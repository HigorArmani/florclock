import { Component } from '@angular/core'
import { FONTAWESOME } from '../cons'

@Component({
  selector: 'fclock-layout-menu',
  templateUrl: './layout-menu.component.html'
})
export class LayoutMenuComponent {

  optSelected: OptMenu

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
      urlRouter: ""
    },
    {
      icon: FONTAWESOME.ICON.CLOCK,
      title: "Ponto",
      urlRouter: ""
    }
  ]

  onSelect(opt: OptMenu) {
    this.optSelected = opt
  }

}

interface OptMenu {
  icon: string
  title: string
  urlRouter: string
}