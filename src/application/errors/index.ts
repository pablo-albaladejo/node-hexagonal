import { ZodIssue } from 'zod';

export class AppError extends Error {
    constructor(
        public error: string,
        public status = 500,
    ) {
        super();
        this.message = error;
        this.status = status;
    }
}

export class ValidationError extends Error {
    constructor(
        public errors: ZodIssue[],
        public status = 400,
    ) {
        super();
        this.message = 'Error validating request';
        this.errors = errors;
        this.status = status;
    }
}

export class NotFoundError extends AppError {
    constructor(public error = 'Not Found') {
        super(error, 404);
    }
}
