import Customer from '../../customer/domain/Customer';
import { EmploymentStatus } from '../../types/Types';
import { Rule } from './Rule';

export default class EmploymentStatusRule implements Rule<Customer> {
    private _employmentStatus: EmploymentStatus;

    constructor(employmentStatus: EmploymentStatus) {
        this._employmentStatus = employmentStatus;
    }

    isEligible({ employmentStatus }: Customer): boolean {
        return employmentStatus.toLowerCase() === this._employmentStatus.toLowerCase();
    }
}
