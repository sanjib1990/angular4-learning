import { Injectable } from '@angular/core';
import { AppStorage } from './app.storage';
import { TokenManagerContract } from '../contracts/token.manager.contract';

@Injectable()
export class TokenManager implements TokenManagerContract {
    /**
     * @type {string}
     */
    protected tokenKey = 'token';

    /**
     * @type {string}
     */
    protected userKey = 'user';

    /**
     * TokenManager Constructor.
     *
     * @param {Storage} storage
     */
    constructor(private storage: AppStorage) {
    }

    /**
     * Store the api token.
     *
     * @param {string} token
     */
    storeToken(token: string) {
        this.storage.store({
            key: this.tokenKey,
            value: 'Bearer ' + token
        });
    }

    /**
     * Get the token.
     *
     * @returns {string}
     */
    getToken(): string {
        return this.storage.getItem(this.tokenKey);
    }

    /**
     * Remove the token.
     */
    removeToken(): void {
        this.storage.remove(this.tokenKey);
        this.storage.remove(this.userKey);
    }

    /**
     * Check if the app has the tonek.
     *
     * @returns {boolean}
     */
    public hasToken(): boolean {
        return !! this.getToken();
    }

    /**
     * Associate the user.
     *
     * @param {object} user
     */
    public associateUser(user: object) {
        this.storage.store({
            key: this.userKey,
            value: user
        });
    }

    /**
     * Get the associated User.
     *
     * @returns {any}
     */
    get user() {
        return this.storage.getItem(this.userKey);
    }
}
