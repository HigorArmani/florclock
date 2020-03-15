import { HttpParams, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs'
import { Injectable } from '@angular/core'
import { BaseService } from './base-service'
import { API_BASE_DIAS } from '../api'

@Injectable({
    providedIn: 'root'
})
export class BaseDiaService {

    constructor(protected baseService: BaseService) { }

    /**
     * Retorna o recurso de listagem
     * @param params HttpParams
     * @param headers HttpHeaders
     */
    getList(params?: HttpParams, headers?: HttpHeaders): Observable<Object> {
        return this.baseService.getList(API_BASE_DIAS, params, headers)
    }
}