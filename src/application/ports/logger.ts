export interface Logger {
    debug: (message: string, metadata?: object) => void;
    info: (message: string, metadata?: object) => void;
    error: (message: string, metadata?: object) => void;
    warning: (message: string, metadata?: object) => void;
    fatal: (message: string, metadata?: object) => void;
}
