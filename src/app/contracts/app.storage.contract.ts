import { StorageArgs } from './storage.args';

export interface AppStorageContract {
    /**
     * Set the App key.
     *
     * @param {string} appKey
     */
    setAppKey(appKey: string);

    /**
     * Load the storage items.
     *
     * @param {string} appKey
     */
    loadItems(appKey?: string);

    /**
     * Store an item in storage.
     *
     * @param {StorageArgs} param
     */
    store(param: StorageArgs);

    /**
     * Update the storage.
     */
    updateStorage();

    /**
     * Get specific items form storage.
     *
     * @param {string} key
     * @returns {any}
     */
    getItem(key: string);

    /**
     * Clear the app storage.
     */
    clearAppStorage();

    /**
     * Remove an item from the key.
     *
     * @param {string} itemKey
     */
    remove(itemKey: string);
}
