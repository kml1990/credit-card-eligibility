import { injectable } from 'inversify';
import { match } from 'react-router-dom';

@injectable()
export default class RouteService {
    isPage<T>(pageMatch: match<T>): boolean {
        return pageMatch.isExact;
    }
}
