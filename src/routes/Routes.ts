import { RouteProps } from 'react-router';
import Cards from '../components/pages/credit_cards/CreditCards';
import Customers from '../components/pages/customers/Customers';
import CheckCredit from '../components/pages/check_credit/CheckCredit';
import Customer from '../components/pages/customers/Customer';

export const Routes = {
    CHECK_CREDIT: '/check-credit',
    CUSTOMERS: '/customers',
    CUSTOMER: '/customers/:id',
    CREDIT_CARDS: '/credit-cards',
};

export interface RouteConfig extends RouteProps {
    id: string;
    name?: string;
}

export const RoutesConfig: RouteConfig[] = [
    {
        id: 'check-credit',
        name: 'Check Eligibility',
        path: Routes.CHECK_CREDIT,
        exact: true,
        component: CheckCredit,
    },
    {
        id: 'customers',
        name: 'Customers',
        path: Routes.CUSTOMERS,
        exact: true,
        component: Customers,
    },
    {
        id: 'customer',
        path: Routes.CUSTOMER,
        exact: true,
        component: Customer,
    },
    {
        id: 'credit-cards',
        name: 'Credit Cards',
        path: Routes.CREDIT_CARDS,
        exact: true,
        component: Cards,
    },
];
