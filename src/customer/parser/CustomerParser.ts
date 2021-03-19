import { injectable } from 'inversify';
import { Parser } from '../../types/Types';
import Customer from '../domain/Customer';
import { CustomerDto } from '../dto/CustomerDto';

@injectable()
export default class CustomerParser implements Parser<CustomerDto, Customer> {
    parse(customerDto: CustomerDto): Customer {
        const { id, name, last_name, employment_status, income } = customerDto;

        const customerParams = {
            id,
            name,
            lastName: last_name,
            employmentStatus: employment_status,
            income,
        };

        return new Customer(customerParams);
    }
}
