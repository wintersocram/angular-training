import { ErrorHandler } from '@angular/core';

export class AppErrorHandler extends ErrorHandler {
    handleError(error) {
        alert('An unexpected error occurred.');
        console.debug('AppErrorHandler: ', error);
    }
}