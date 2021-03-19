import { ContainerModule, interfaces } from 'inversify';
import CustomerService from '../../customer/service/CustomerService';
import CustomerParser from '../../customer/parser/CustomerParser';
import DependencyType from '../DependencyType';

const CustomerContainer = new ContainerModule((bind: interfaces.Bind) => {
    bind<CustomerService>(DependencyType.CustomerService).to(CustomerService).inSingletonScope();
    bind<CustomerParser>(DependencyType.CustomerParser).to(CustomerParser).inSingletonScope();
});

export default CustomerContainer;
