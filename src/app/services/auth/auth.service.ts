import 'rxjs/add/operator/map';
import { JwtHelper } from 'angular2-jwt';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JsonHeaders } from '../../models/json-headers';
import { TokenManager } from '../../common/token.manager';
import { ApiHeaders } from '../../models/api-headers';

@Injectable()
export class AuthService {
    private url = 'http://laravel.loc/api/v1/auth/jwt';
    private jwtHelper: JwtHelper;

    /**
     * AuthService Constructor.
     *
     * @param {HttpClient} http
     * @param jsonHeaders
     * @param tokenManager
     * @param apiHeader
     */
    constructor(
        private http: HttpClient,
        private apiHeader: ApiHeaders,
        private jsonHeaders: JsonHeaders,
        private tokenManager: TokenManager
    ) {
        this.jwtHelper = new JwtHelper();
    }

    /**
     * Authenticate a user and login.
     *
     * @param credentials
     * @returns {Observable<Object>}
     */
    public login(credentials) {
        return this
            .http
            .post(this.url + '/token', credentials, {
                headers: this.jsonHeaders.getHeaders(),
                observe: 'response'
            })
            .map((response: any) => {
                if (response.status === 200) {
                    this.tokenManager.storeToken(response.body.data);

                    this.userDetails().subscribe(response => {
                        this.tokenManager.associateUser(response.data);
                    });

                    return true;
                }

                return false;
            });
    }

    /**
     * Log out the authenticated user.
     */
    public logout() {
        this.tokenManager.removeToken();
    }

    /**
     * Get the authenticated user.
     *
     * @returns {any}
     */
    get user() {
        return this.tokenManager.user || {};
    }

    /**
     * Check if the user is loggedin.
     *
     * @returns {boolean}
     */
    public isLoggedIn() {
        let token = this.tokenManager.getToken();

        if (!token) {
            return false;
        }

        return !this.jwtHelper.isTokenExpired(token);
    }

    /**
     * Get the details for the auth user.
     *
     * @returns {Observable<any>}
     */
    public userDetails(): any {
        return this
            .http
            .get(this.url + '/user', {
                headers: this.apiHeader.getHeaders(),
                observe: 'response'
            })
            .map(response => response.body);
    }
}
