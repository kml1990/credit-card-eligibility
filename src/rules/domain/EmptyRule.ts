import Customer from '../../customer/domain/Customer';
import { Rule } from './Rule';

export default class EmptyRule implements Rule<Customer> {
    isEligible(_: Customer): boolean {
        return true;
    }
}
