import { Rule } from '../rules/Rule';
import { Validator } from './Validator';

export default class EligibilityValidator<T> implements Validator<T> {
    private _eligibilitRules: Set<Rule<T>>;

    constructor(rules: Rule<T>[]) {
        this._eligibilitRules = new Set(rules);
    }

    isValid(entity: T): boolean {
        return Array.from(this._eligibilitRules).every(rule => {
            return rule.isEligible(entity);
        });
    }
}
