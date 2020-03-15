import { BaseResourceInterface } from 'src/app/base/base-interfaces/base-resource.interface'
import { BaseDiaInterface } from 'src/app/base/base-interfaces/base.interface'
import { RhEscalaInterface } from '../rh-escala/rh-escala.interface'

export interface RhHorarioInterface extends BaseResourceInterface {
    baseDia?: BaseDiaInterface
    rhEscala?: RhEscalaInterface
    hrEntrada?: string
    hrSaida?: string
}