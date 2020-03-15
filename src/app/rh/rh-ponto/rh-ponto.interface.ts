import { BaseResourceInterface } from 'src/app/base/base-interfaces/base-resource.interface'

export interface RhPontoInterface extends BaseResourceInterface {
    hrEntrada: string,
    hrEntradaAlmoco: string,
    hrSaidaAlmoco: string,
    hrSaida: string,
    data: string
}