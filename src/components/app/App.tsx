import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { useInjection } from '../../di/DependencyContext';
import DependencyType from '../../di/DependencyType';
import { Routes, RoutesConfig } from '../../routes/Routes';
import { CardsProvider } from '../cards/CardsContext';
import { CustomersProvider } from '../customers/CustomersContext';

import './App.scss';

const App: React.FC = () => {
    const queryClient = useInjection<QueryClient>(DependencyType.QueryClient);

    return (
        <QueryClientProvider client={queryClient}>
            <CardsProvider>
                <CustomersProvider>
                    <BrowserRouter>
                        <Switch>
                            {RoutesConfig.map(({ id, exact, path, component }) => (
                                <Route key={id} exact={exact} path={path} component={component} />
                            ))}
                            <Redirect to={Routes.HOME} />
                        </Switch>
                    </BrowserRouter>
                </CustomersProvider>
            </CardsProvider>
        </QueryClientProvider>
    );
};

export default App;
