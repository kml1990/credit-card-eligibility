import { ContainerModule, interfaces } from 'inversify';
import CardService from '../../card/service/CardService';
import CardParser from '../../card/parser/CardParser';
import DependencyType from '../DependencyType';

const CardContainer = new ContainerModule((bind: interfaces.Bind) => {
    bind<CardParser>(DependencyType.CardParser).to(CardParser).inSingletonScope();
    bind<CardService>(DependencyType.CardService).to(CardService).inSingletonScope();
});

export default CardContainer;
