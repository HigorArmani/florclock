import { Component, OnInit } from '@angular/core'
import { RhFuncionarioService } from '../../rh-funcionario/rh-funcionario.service'
import { RhFuncionarioInterface } from '../../rh-funcionario/rh-funcionario.interface'
import { PATH_IMG_PROFILE } from 'src/app/base/api'
import { HttpParams } from '@angular/common/http'
import { RESOURCE } from 'src/app/base/base-cons'

@Component({
  selector: 'fclock-rh-dashboard-status',
  templateUrl: './rh-dashboard-status.component.html'
})
export class RhDashboardStatusComponent implements OnInit {

  readonly pathImg = PATH_IMG_PROFILE

  rhFuncionarios: RhFuncionarioInterface[]

  constructor(private funcionarioService: RhFuncionarioService) { }

  ngOnInit(): void {

    let params = (new HttpParams)
    .set("limit", "5")
    .set("hrUltima[order]", RESOURCE.ORDER.DESC)

    this.funcionarioService
      .getList(params)
      .subscribe((res: RhFuncionarioInterface[]) => {
        this.rhFuncionarios = res
      })

  }

}