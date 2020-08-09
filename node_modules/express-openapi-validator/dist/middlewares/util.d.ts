import * as Ajv from 'ajv';
import { Request } from 'express';
import { ValidationError } from '../framework/types';
export declare class ContentType {
    contentType: string;
    mediaType: string;
    charSet: string;
    withoutBoundary: string;
    private constructor();
    static from(req: Request): ContentType;
    equivalents(): string[];
}
/**
 * (side-effecting) modifies the errors object
 * TODO - do this some other way
 * @param errors
 */
export declare function augmentAjvErrors(errors?: Ajv.ErrorObject[]): Ajv.ErrorObject[];
export declare function ajvErrorsToValidatorError(status: number, errors: Ajv.ErrorObject[]): ValidationError;
export declare const deprecationWarning: {
    (...data: any[]): void;
    (message?: any, ...optionalParams: any[]): void;
};
