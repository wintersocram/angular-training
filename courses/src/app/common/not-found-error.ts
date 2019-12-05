import { AppError } from './app-error';

export class NotFoundError extends AppError {
    constructor(private error: Response) {
        super();
        console.debug('NotFoundError: ', error);
    }
}