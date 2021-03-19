import { injectable } from 'inversify';
import { Parser } from '../../types/Types';
import Customer from '../domain/Customer';
import { CustomerDto } from '../dto/CustomerDto';

@injectable()
export default class CustomerParser implements Parser<CustomerDto, Customer> {
    parse({ id, name, lastName, employmentStatus, income }: CustomerDto): Customer {
        const customerParams = {
            id,
            name,
            lastName,
            employmentStatus,
            income,
        };

        return new Customer(customerParams);
    }
}
