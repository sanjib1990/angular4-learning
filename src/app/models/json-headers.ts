import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';

@Injectable()
export class JsonHeaders {
    private httpHeaders: HttpHeaders;

    /**
     * JsonHeaders Constructor.
     */
    constructor() {
        this.httpHeaders = new HttpHeaders();
    }

    /**
     * Get the json headers.
     *
     * @returns {HttpHeaders}
     */
    public getHeaders(): HttpHeaders {
        return this.httpHeaders.set('Content-Type', 'application/json').set('Accept', 'application/json');
    }
}
