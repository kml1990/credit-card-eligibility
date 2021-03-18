import { Container } from 'inversify';
import RoutesContainer from './modules/RoutesContainer';

export const dependenciesContainer = new Container();

export const initDependencies = async (): Promise<void> => {
    dependenciesContainer.load(RoutesContainer);
};
