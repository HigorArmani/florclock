import { HttpParams, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs'

export interface BaseServiceInterface {

    api: string

    /**
     * Retorna o recurso de listagem
     * @param params HttpParams
     * @param headers HttpHeaders
     */
    getList(params?: HttpParams, headers?: HttpHeaders): Observable<Object>

    /**
     * Realiza o post do recurso
     * @param params HttpParams
     * @param headers HttpHeaders
     */
    post(data, params?: HttpParams, headers?: HttpHeaders): Observable<Object>

    /**
     * Realiza o put do recurso
     * @param params HttpParams
     * @param headers HttpHeaders
     */
    put(data, id: number | string, params?: HttpParams, headers?: HttpHeaders): Observable<Object>

    /**
     * Realiza o delete do recurso
     * @param params HttpParams
     * @param headers HttpHeaders
     */
    delete(id: number | string, params?: HttpParams, headers?: HttpHeaders): Observable<Object>
}