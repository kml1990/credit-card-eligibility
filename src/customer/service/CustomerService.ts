import { inject, injectable } from 'inversify';
import Customer from '../domain/Customer';
import customersDto from '../customers.json';
import { CustomerDto } from '../dto/CustomerDto';
import CustomerParser from '../parser/CustomerParser';
import DependencyType from '../../di/DependencyType';

@injectable()
export default class CustomerService {
    private readonly _customers: Set<Customer>;

    private readonly _parser: CustomerParser;

    constructor(@inject(DependencyType.CustomerParser) parser: CustomerParser) {
        this._parser = parser;
        this._customers = new Set();
    }

    getCustomers(): Customer[] {
        if (this._customers.size === 0) {
            this.fetchCustomers().map(customer => this._customers.add(customer));
        }
        return Array.from(this._customers);
    }

    private fetchCustomers(): Customer[] {
        return (customersDto as CustomerDto[]).map(this._parser.parse); // this._customerParser.parse(customers as CustomerDto[]);
    }
}
