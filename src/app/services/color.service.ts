import {Injectable} from '@angular/core';

@Injectable()

export class ColorService {
    constructor() {
    }

    getColors() {
        return ['red', 'green', 'blue'];
    }
}
