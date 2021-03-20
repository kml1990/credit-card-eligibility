import React, { createContext, useCallback, useContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Customer from '../../customer/domain/Customer';
import CustomerService from '../../customer/service/CustomerService';
import { useInjection } from '../../di/DependencyContext';
import DependencyType from '../../di/DependencyType';
import { CustomerForm, CustomerParams } from '../../types/Types';

export interface CustomersContextProps {
    customers: Customer[];
    loadCustomers: () => void;
    addCustomer: (formValues: CustomerForm) => Customer;
}

export const CustomersContext = createContext<CustomersContextProps>({} as CustomersContextProps);

export const CustomersProvider: React.FC = ({ children }) => {
    const customerService = useInjection<CustomerService>(DependencyType.CustomerService);
    const [customers, setCustomers] = useState<Customer[]>([]);

    const loadCustomers = useCallback(() => {
        setCustomers(customerService.getCustomers());
    }, [customerService]);

    const addCustomer = (customerFormValues: CustomerForm) => {
        const customer = customerService.addCustomer({
            id: uuidv4(),
            ...customerFormValues,
        });
        loadCustomers();
        return customer;
    };

    const values = {
        customers,
        loadCustomers,
        addCustomer,
    };

    return <CustomersContext.Provider value={values}>{children}</CustomersContext.Provider>;
};

export function useCustomers(): CustomersContextProps {
    return useContext(CustomersContext);
}
