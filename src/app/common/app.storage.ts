import { Injectable } from '@angular/core';

@Injectable()
export class AppStorage {
    /**
     * @type {string}
     */
    protected appKey = 'app';

    /**
     * @type {object}
     */
    protected items = {};

    /**
     * Storage Constructor.
     */
    constructor() {
        let fromLocalStorage = localStorage.getItem(this.appKey);

        if (fromLocalStorage) {
            this.items = JSON.parse(atob(fromLocalStorage));
        }
    }

    /**
     * Set the App key.
     *
     * @param {string} appKey
     */
    public setAppKey(appKey = 'app') {
        this.appKey = appKey;
    }

    /**
     * Load the storage items.
     *
     * @param {string} appKey
     */
    public loadItems(appKey?: string) {
        appKey = appKey ? appKey : this.appKey;
        let fromLocalStorage = localStorage.getItem(appKey);

        if (!fromLocalStorage) {
            return false;
        }

        this.items = JSON.parse(atob(fromLocalStorage));
    }

    /**
     * Store an item in storage.
     *
     * @param {StorageArgs} param
     */
    public store(param: StorageArgs) {
        this.items[param.key] = param.value;

        this.updateStorage();
    }

    /**
     * Update the storage.
     */
    public updateStorage() {
        localStorage.setItem(this.appKey, btoa(JSON.stringify(this.items)));
    }

    /**
     * Get specific items form storage.
     *
     * @param {string} key
     * @returns {any}
     */
    public getItem(key: string) {
        return this.items[key];
    }

    /**
     * Clear the app storage.
     */
    public clearAppStorage() {
        this.items = {};

        localStorage.removeItem(this.appKey);
    }

    /**
     * Remove an item from the key.
     *
     * @param {string} itemKey
     */
    public remove(itemKey: string) {
        delete this.items[itemKey];

        this.updateStorage();
    }
}

export interface StorageArgs {
    key: string;
    value: any;
}
