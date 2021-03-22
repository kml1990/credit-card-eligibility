import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import CustomerDomain from '../../../customer/domain/Customer';
import CreditCardList from '../../credit_cards/CreditCardList';
import { useCustomers } from '../../customers/CustomersContext';

export interface CustomerParams {
    id: string;
}

const Customer: React.FC = () => {
    const { id } = useParams<CustomerParams>();
    const { getCustomer } = useCustomers();
    const [customer, setCustomer] = useState<CustomerDomain>();

    useEffect(() => {
        if (id) {
            setCustomer(getCustomer(id));
        }
    }, [getCustomer, id, setCustomer]);

    return (
        <div className="Customer">
            <CreditCardList customer={customer} selectable />
        </div>
    );
};

export default Customer;
