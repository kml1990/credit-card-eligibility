import { RouteProps } from 'react-router';
import Home from '../components/pages/home/Home';

export const Routes = {
    HOME: '/',
    CUSTOMERS: '/customers',
    CARDS: '/cards',
    CARD: '/cards/:card',
};

export interface RouteConfig extends RouteProps {
    id: string;
}

export const RoutesConfig: RouteConfig[] = [
    {
        id: 'home',
        path: Routes.HOME,
        exact: true,
        component: Home,
    },
    {
        id: 'customers',
        path: Routes.CUSTOMERS,
        exact: true,
        component: Home,
    },
    {
        id: 'cards',
        path: Routes.CARDS,
        exact: true,
        component: Home,
    },
    {
        id: 'card',
        path: Routes.CARD,
        exact: true,
        component: Home,
    },
];
