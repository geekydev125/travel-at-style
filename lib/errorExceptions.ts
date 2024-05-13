export class LoadingResourceError extends Error {
    constructor(message = 'An error occurred while attempting to load the requested resource') {
        super(message);
        this.name = 'LoadingResourceError';
    }
}