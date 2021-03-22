import { ContainerModule, interfaces } from 'inversify';
import CreditCardService from '../../credit_card/service/CreditCardService';
import CreditCardParser from '../../credit_card/parser/CreditCardParser';
import DependencyType from '../DependencyType';
import CreditCardCalculator from '../../credit_card/service/CreditCardCalculator';

const CreditCardContainer = new ContainerModule((bind: interfaces.Bind) => {
    bind<CreditCardParser>(DependencyType.CreditCardParser).to(CreditCardParser).inSingletonScope();
    bind<CreditCardService>(DependencyType.CreditCardService)
        .to(CreditCardService)
        .inSingletonScope();
    bind<CreditCardCalculator>(DependencyType.CreditCardCalculator)
        .to(CreditCardCalculator)
        .inSingletonScope();
});

export default CreditCardContainer;
