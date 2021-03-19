export interface Validator<T> {
    isValid: (entity: T) => boolean;
}
