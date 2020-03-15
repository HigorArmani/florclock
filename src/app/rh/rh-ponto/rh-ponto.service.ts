import { Injectable } from '@angular/core'
import { API_PONTOS } from 'src/app/base/api'
import { BaseAbstractService } from 'src/app/base/base-service/base-abstract-service'

@Injectable({
  providedIn: 'root'
})
export class RhPontoService extends BaseAbstractService {

  readonly api = API_PONTOS
}