import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs'
import { Injectable } from '@angular/core'

@Injectable({
    providedIn: 'root'
})
export class BaseService {

    constructor(private http: HttpClient) { }

    /**
     * Retorna o recurso de listagem
     * @param params HttpParams
     * @param headers HttpHeaders
     */
    getList(api: string, params?: HttpParams, headers?: HttpHeaders): Observable<Object> {
        return this.http.get(api, { headers: headers, params: params })
    }

    /**
     * Realiza o post do recurso
     * @param params HttpParams
     * @param headers HttpHeaders
     */
    post(api: string, data, params?: HttpParams, headers?: HttpHeaders): Observable<Object> {
        return this.http.post(api, data, { headers: headers, params: params })
    }

    /**
     * Realiza o put do recurso
     * @param params HttpParams
     * @param headers HttpHeaders
     */
    put(api: string, data, id: number | string, params?: HttpParams, headers?: HttpHeaders): Observable<Object> {
        return this.http.put(`${api}/${id}`, data, { headers: headers, params: params })
    }

    /**
     * Realiza o delete do recurso
     * @param params HttpParams
     * @param headers HttpHeaders
     */
    delete(api: string, id: number | string, params?: HttpParams, headers?: HttpHeaders): Observable<Object> {
        return this.http.delete(`${api}/${id}`, { headers: headers, params: params })
    }
}