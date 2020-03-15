import { Injectable } from '@angular/core'
import { API_FUNCIONARIOS } from 'src/app/base/api'
import { BaseAbstractService } from 'src/app/base/base-service/base-abstract-service'

@Injectable({
  providedIn: 'root'
})
export class RhFuncionarioService extends BaseAbstractService {

  readonly api = API_FUNCIONARIOS
}