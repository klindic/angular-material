import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class StorageService {

    constructor() { }

    public setItem(storage: Storage, name: string, value: string) {
        storage.setItem(name, value);
    }

    public getItem(storage: Storage, name: string): string {
        return storage.getItem(name);
    }
}
