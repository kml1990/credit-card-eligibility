import React, { useEffect } from 'react';
import { useCustomers } from '../../customers/CustomersContext';

const Customers: React.FC = () => {
    const { customers, loadCustomers } = useCustomers();

    useEffect(() => {
        loadCustomers();
    }, [loadCustomers]);

    return (
        <div className="Customers">
            <pre>{JSON.stringify(customers, null, 2)}</pre>
        </div>
    );
};

export default Customers;
