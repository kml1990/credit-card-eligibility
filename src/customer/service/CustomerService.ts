import { inject, injectable } from 'inversify';
import Customer from '../domain/Customer';
import customersDto from '../customers.json';
import { CustomerDto } from '../dto/CustomerDto';
import CustomerParser from '../parser/CustomerParser';
import DependencyType from '../../di/DependencyType';
import { CustomerParams } from '../../types/Types';

@injectable()
export default class CustomerService {
    private readonly _customers: Map<string, Customer>;

    private readonly _parser: CustomerParser;

    constructor(@inject(DependencyType.CustomerParser) parser: CustomerParser) {
        this._parser = parser;
        this._customers = new Map();
    }

    getCustomers(): Customer[] {
        if (this._customers.size === 0) {
            this.fetchCustomers().map(customer => this.addCustomer(customer));
        }
        return Array.from(this._customers.values());
    }

    addCustomer(customerParams: CustomerParams): Customer {
        const customer = new Customer(customerParams);
        this._customers.set(customer.id, customer);
        return customer;
    }

    private fetchCustomers(): Customer[] {
        return (customersDto as CustomerDto[]).map(this._parser.parse);
    }
}
