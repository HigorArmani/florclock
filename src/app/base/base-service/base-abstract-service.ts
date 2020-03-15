import { HttpParams, HttpHeaders } from '@angular/common/http'
import { Inject, Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { BaseServiceInterface } from '../base-interfaces/base-service.interface'
import { BaseService } from './base-service'

@Injectable({
    providedIn: 'root'
})
export abstract class BaseAbstractService implements BaseServiceInterface {

    abstract api: string

    constructor(@Inject(BaseService) protected baseService: BaseService) { }

    /**
     * Retorna o recurso de listagem
     * @param params HttpParams
     * @param headers HttpHeaders
     */
    getList(params?: HttpParams, headers?: HttpHeaders): Observable<Object> {
        return this.baseService.getList(this.api, params, headers)
    }

    /**
     * Realiza o post do recurso
     * @param params HttpParams
     * @param headers HttpHeaders
     */
    post(data, params?: HttpParams, headers?: HttpHeaders): Observable<Object> {
        return this.baseService.post(this.api, data, params, headers)
    }

    /**
     * Realiza o put do recurso
     * @param params HttpParams
     * @param headers HttpHeaders
     */
    put(data, id: number | string, params?: HttpParams, headers?: HttpHeaders): Observable<Object> {
        return this.baseService.put(this.api, data, id, params, headers)
    }

    /**
     * Realiza o delete do recurso
     * @param params HttpParams
     * @param headers HttpHeaders
     */
    delete(id: number | string, params?: HttpParams, headers?: HttpHeaders): Observable<Object> {
        return this.baseService.delete(this.api, id, params, headers)
    }
}