import React, { createContext, useContext, useEffect, useState } from 'react';
import Customer from '../../customer/domain/Customer';
import CustomerService from '../../customer/service/CustomerService';
import { useInjection } from '../../di/DependencyContext';
import DependencyType from '../../di/DependencyType';

export interface CustomersContextProps {
    customers: Customer[];
}

export const CustomersContext = createContext<CustomersContextProps>({} as CustomersContextProps);

export const CustomersProvider: React.FC = ({ children }) => {
    const customerService = useInjection<CustomerService>(DependencyType.CustomerService);
    const [customers, setCustomers] = useState<Customer[]>([]);

    useEffect(() => {
        setCustomers(customerService.getCustomers());
    }, [customerService]);

    const values = {
        customers,
    };

    return <CustomersContext.Provider value={values}>{children}</CustomersContext.Provider>;
};

export function useCustomers(): CustomersContextProps {
    return useContext(CustomersContext);
}
