import { ContainerModule, interfaces } from 'inversify';
import CardParser from '../../card/parser/CardParser';
import CardService from '../../card/service/CardService';
import DependencyType from '../DependencyType';

const CardContainer = new ContainerModule((bind: interfaces.Bind) => {
    bind<CardParser>(DependencyType.CardParser).to(CardParser).inSingletonScope();
    bind<CardService>(DependencyType.CardService).to(CardService).inSingletonScope();
});

export default CardContainer;
