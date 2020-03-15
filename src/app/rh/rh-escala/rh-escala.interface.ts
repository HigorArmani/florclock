import { BaseResourceInterface } from 'src/app/base/base-interfaces/base-resource.interface'
import { RhHorarioInterface } from '../rh-horario/rh-horario.interface'

export interface RhEscalaInterface extends BaseResourceInterface {
    nome: string,
    rhHorarios?: RhHorarioInterface[]
}