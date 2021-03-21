import React, { useEffect, useState } from 'react';
import Customer from '../../customer/domain/Customer';
import CustomerListItem from './CustomerListItem';
import { useCustomers } from './CustomersContext';

import './CustomerList.scss';

export interface CreditCardListProps {
    customer?: Customer;
}

const CustomersList: React.FC<CreditCardListProps> = ({ customer }) => {
    const { customers: allCustomers } = useCustomers();
    const [customers, setCustomers] = useState<Customer[]>([]);

    useEffect(() => {
        if (customer) {
            setCustomers([customer]);
            return;
        }
        setCustomers(allCustomers);
    }, [allCustomers, customer]);

    return (
        <div className="CustomerList">
            {customers.map(customerEntry => (
                <CustomerListItem key={customerEntry.id} customer={customerEntry} />
            ))}
        </div>
    );
};

export default CustomersList;
