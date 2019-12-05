import { AppError } from './app-error';

export class BadInput extends AppError {
    constructor(private error?: any) {
        super();
        console.debug('BadInput: ', error);
    }
}