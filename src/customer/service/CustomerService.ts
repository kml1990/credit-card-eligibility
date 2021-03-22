import { inject, injectable } from 'inversify';
import Customer from '../domain/Customer';
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

    async getCustomers(): Promise<Customer[]> {
        if (this._customers.size === 0) {
            const customers = await this.fetchCustomers();
            const parsedCustomers = this.parseCustomers(customers);
            parsedCustomers.map(customer => this.addCustomer(customer));
        }
        return Array.from(this._customers.values());
    }

    addCustomer(customerParams: CustomerParams): Customer {
        const customer = new Customer(customerParams);
        this._customers.set(customer.id, customer);
        return customer;
    }

    getCustomer(id: string): Customer | undefined {
        return this._customers.get(id);
    }

    private parseCustomers(customers: CustomerDto[]): Customer[] {
        return customers.map(customer => this._parser.parse(customer));
    }

    private async fetchCustomers(): Promise<CustomerDto[]> {
        const images = await fetch('/customers');
        return images.json();
    }
}
