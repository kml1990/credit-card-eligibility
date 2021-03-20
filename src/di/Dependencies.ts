import { Container } from 'inversify';
import { QueryClient } from 'react-query';
import DependencyType from './DependencyType';
import CreditCardContainer from './modules/CreditCardContainer';
import CustomerContainer from './modules/CustomerContainer';
import RuleParser from '../rules/parser/RuleParser';

export const dependenciesContainer = new Container();

export const initDependencies = async (): Promise<void> => {
    dependenciesContainer
        .bind<QueryClient>(DependencyType.QueryClient)
        .toConstantValue(new QueryClient());

    dependenciesContainer
        .bind<RuleParser>(DependencyType.RuleParser)
        .to(RuleParser)
        .inSingletonScope();

    dependenciesContainer.load(CreditCardContainer);
    dependenciesContainer.load(CustomerContainer);
};
