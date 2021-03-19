import Customer from '../customer/domain/Customer';
import { Rule } from './Rule';

export interface IcomeRulesParams {
    min?: number;
    max?: number;
}

export default class IncomeRule implements Rule<Customer> {
    private _min: number;

    private _max: number;

    constructor({ min = 0, max = 0 }: IcomeRulesParams) {
        this._min = min;
        this._max = max;
    }

    private isIncomeLessThan(income: number) {
        if (this._max === 0) {
            return true;
        }
        return income < this._max;
    }

    private isIncomeMoreThan(income: number) {
        if (this._min === 0) {
            return true;
        }
        return income > this._min;
    }

    isEligible({ income }: Customer): boolean {
        return this.isIncomeLessThan(income) && this.isIncomeMoreThan(income);
    }
}
