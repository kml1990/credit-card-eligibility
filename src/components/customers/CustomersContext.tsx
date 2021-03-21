import React, { createContext, useCallback, useContext, useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Customer from '../../customer/domain/Customer';
import CustomerService from '../../customer/service/CustomerService';
import { useInjection } from '../../di/DependencyContext';
import DependencyType from '../../di/DependencyType';
import { CustomerForm } from '../../types/Types';

export type AddCustomer = (formValues: CustomerForm) => Customer;
export type GetCustomer = (id: string) => Customer | undefined;
export interface CustomersContextProps {
    customers: Customer[];
    loadCustomers: () => void;
    addCustomer: AddCustomer;
    getCustomer: GetCustomer;
}

export const CustomersContext = createContext<CustomersContextProps>({} as CustomersContextProps);

export const CustomersProvider: React.FC = ({ children }) => {
    const customerService = useInjection<CustomerService>(DependencyType.CustomerService);
    const [customers, setCustomers] = useState<Customer[]>([]);

    const loadCustomers = useCallback(() => {
        setCustomers(customerService.getCustomers());
    }, [customerService]);

    useEffect(() => {
        loadCustomers();
    }, [loadCustomers]);

    const addCustomer = (customerFormValues: CustomerForm) => {
        const customer = customerService.addCustomer({
            id: uuidv4(),
            ...customerFormValues,
        });
        loadCustomers();
        return customer;
    };

    const getCustomer = (id: string) => {
        return customerService.getCustomer(id);
    };

    const values = {
        customers,
        loadCustomers,
        addCustomer,
        getCustomer,
    };

    return <CustomersContext.Provider value={values}>{children}</CustomersContext.Provider>;
};

export function useCustomers(): CustomersContextProps {
    return useContext(CustomersContext);
}
