import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { useInjection } from '../../di/DependencyContext';
import DependencyType from '../../di/DependencyType';
import { Routes, RoutesConfig } from '../../routes/Routes';

import './App.scss';

const App: React.FC = () => {
    const queryClient = useInjection<QueryClient>(DependencyType.QueryClient);

    return (
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>
                <Switch>
                    {RoutesConfig.map(({ id, exact, path, component }) => (
                        <Route key={id} exact={exact} path={path} component={component} />
                    ))}
                    <Redirect to={Routes.HOME} />
                </Switch>
            </BrowserRouter>
        </QueryClientProvider>
    );
};

export default App;
