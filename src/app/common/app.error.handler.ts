import {ErrorHandler} from '@angular/core';

export class AppErrorHandler implements ErrorHandler {
    handleError(error: Response | any): void {
        console.log('[ERROR] Something went terribly wrong...', error);
    }
}
