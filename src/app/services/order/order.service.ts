import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiHeaders } from '../../models/api-headers';

@Injectable()
export class OrderService {
    private url = 'http://laravel.loc/api/v1/orders';

    constructor(private http: HttpClient, private apiHeaders: ApiHeaders) {
    }

    /**
     * Get Orders.
     *
     * @returns {Observable<any>}
     */
    getOrders(): any {
        return this
            .http
            .get(this.url, {
                headers: this.apiHeaders.getHeaders(),
                observe: 'response'
            })
            .map(response => response.body);
    }
}
