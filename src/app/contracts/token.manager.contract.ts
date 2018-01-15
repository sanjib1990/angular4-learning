export interface TokenManagerContract {
    /**
     * Store the token in storage.
     *
     * @param token
     */
    storeToken(token: string);

    /**
     * Get the token from storage.
     *
     * @returns {string}
     */
    getToken(): string;

    /**
     * Remove the token.
     */
    removeToken(): void;

    /**
     * Check if the app has the tonek.
     *
     * @returns {boolean}
     */
    hasToken(): boolean;
}
