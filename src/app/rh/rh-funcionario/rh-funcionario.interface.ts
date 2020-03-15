import { BaseResourceInterface } from 'src/app/base/base-interfaces/base-resource.interface'

export interface RhFuncionarioInterface extends BaseResourceInterface {
    nome: string,
    foto: string
}