import { injectable } from 'inversify';
import Customer from '../domain/Customer';
import customers from '../customers.json';

@injectable()
export default class CustomerService {
    private readonly _customers: Set<Customer>;

    constructor() {
        this._customers = new Set();
    }

    getCustomers() {}

    fetchCustomers(): Customer[] {
        return customers as CustomerDto[];
    }
}
