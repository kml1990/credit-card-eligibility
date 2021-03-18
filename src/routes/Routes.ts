import { RouteProps } from 'react-router';
import Home from '../components/home/Home';

export const Routes = {
    HOME: '/',
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
];
