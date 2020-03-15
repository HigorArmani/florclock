import { HttpParams, HttpHeaders } from '@angular/common/http'

export interface BaseComponentInterface {
    getList(params?: HttpParams, headers?: HttpHeaders): void
}