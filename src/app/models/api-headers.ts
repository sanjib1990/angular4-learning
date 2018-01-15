import { Injectable } from '@angular/core';
import { JsonHeaders } from './json-headers';
import { HttpHeaders } from '@angular/common/http';
import { TokenManager } from '../common/token.manager';

@Injectable()
export class ApiHeaders {
    /**
     * ApiHeaders COnstructor.
     *
     * @param {JsonHeaders} jsonHeaders
     * @param {TokenManager} tokenManager
     */
    constructor(private jsonHeaders: JsonHeaders, private tokenManager: TokenManager) {
    }

    /**
     * Get the Authorization header with the Json headers.
     *
     * @returns {HttpHeaders}
     */
    public getHeaders(): HttpHeaders {
        return this.jsonHeaders.getHeaders().set('Authorization', this.tokenManager.getToken());
    }
}
