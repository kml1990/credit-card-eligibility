import { injectable } from 'inversify';
import { Parser } from '../../types/Types';
import Customer from '../domain/Customer';
import { CustomerDto } from '../dto/CustomerDto';

@injectable()
export default class CustomerParser implements Parser<CustomerDto, Customer> {
    parse(customerDto: CustomerDto): Customer {
        const {
            id,
            title,
            name,
            last_name,
            dob,
            employment_status,
            income,
            house_number,
            post_code,
        } = customerDto;

        const customerParams = {
            id,
            title,
            name,
            lastName: last_name,
            dob,
            employmentStatus: employment_status,
            income,
            houseNo: house_number,
            postCode: post_code,
        };

        return new Customer(customerParams);
    }
}
