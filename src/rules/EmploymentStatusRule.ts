import Customer, { EmploymentStatus } from '../customer/Customer';
import { Rule } from './Rule';

export default class EmploymentStatusRule implements Rule<Customer> {
    private _employmentStatus: EmploymentStatus;

    constructor(employmentStatus: EmploymentStatus) {
        this._employmentStatus = employmentStatus;
    }

    isEligible({ employmentStatus }: Customer): boolean {
        return employmentStatus === this._employmentStatus;
    }
}
