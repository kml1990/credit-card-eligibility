import { Container } from 'inversify';
import { QueryClient } from 'react-query';
import CustomerService from '../customer/service/CustomerService';
import RuleParser from '../rules/parser/RuleParser';
import DependencyType from './DependencyType';
import CardContainer from './modules/CardContainer';

export const dependenciesContainer = new Container();

export const initDependencies = async (): Promise<void> => {
    dependenciesContainer
        .bind<QueryClient>(DependencyType.QueryClient)
        .toConstantValue(new QueryClient());

    dependenciesContainer
        .bind<RuleParser>(DependencyType.RuleParser)
        .to(RuleParser)
        .inSingletonScope();

    dependenciesContainer
        .bind<CustomerService>(DependencyType.CustomerService)
        .to(CustomerService)
        .inSingletonScope();

    dependenciesContainer.load(CardContainer);
};
