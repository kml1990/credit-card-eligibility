import { ContainerModule, interfaces } from 'inversify';
import DependencyType from '../DependencyType';
import RouteService from '../../routes/RouteService';

const RoutesContainer = new ContainerModule((bind: interfaces.Bind) => {
    bind<RouteService>(DependencyType.RouteService).to(RouteService).inSingletonScope();
});

export default RoutesContainer;
