import { Container } from 'inversify';
import { QueryClient } from 'react-query';
import DependencyType from './DependencyType';
import CardContainer from './modules/CardContainer';
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

    dependenciesContainer.load(CardContainer);
    dependenciesContainer.load(CustomerContainer);
};
