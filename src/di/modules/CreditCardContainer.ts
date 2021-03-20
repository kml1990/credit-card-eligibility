import { ContainerModule, interfaces } from 'inversify';
import CreditCardService from '../../card/service/CreditCardService';
import CreditCardParser from '../../card/parser/CreditCardParser';
import DependencyType from '../DependencyType';

const CreditCardContainer = new ContainerModule((bind: interfaces.Bind) => {
    bind<CreditCardParser>(DependencyType.CreditCardParser).to(CreditCardParser).inSingletonScope();
    bind<CreditCardService>(DependencyType.CreditCardService)
        .to(CreditCardService)
        .inSingletonScope();
});

export default CreditCardContainer;
