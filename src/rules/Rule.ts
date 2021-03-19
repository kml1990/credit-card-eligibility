export interface Rule<T> {
    isEligible: (entity: T) => boolean;
}
