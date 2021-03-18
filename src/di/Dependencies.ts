import { Container } from 'inversify';
import { QueryClient } from 'react-query';
import RouteService from '../routes/RouteService';
import DependencyType from './DependencyType';

export const dependenciesContainer = new Container();

export const initDependencies = async (): Promise<void> => {
    dependenciesContainer
        .bind<RouteService>(DependencyType.RouteService)
        .to(RouteService)
        .inSingletonScope();
    dependenciesContainer
        .bind<QueryClient>(DependencyType.QueryClient)
        .toConstantValue(new QueryClient());
};
