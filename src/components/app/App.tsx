import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { useInjection } from '../../di/DependencyContext';
import DependencyType from '../../di/DependencyType';
import { Routes, RoutesConfig } from '../../routes/Routes';
import AppContent from '../content/AppContent';
import { CreditCardsProvider } from '../credit_cards/CreditCardsContext';
import { CustomersProvider } from '../customers/CustomersContext';
import AppNavbar from '../navbar/AppNavbar';

import './App.scss';

const App: React.FC = () => {
    const queryClient = useInjection<QueryClient>(DependencyType.QueryClient);

    return (
        <QueryClientProvider client={queryClient}>
            <CreditCardsProvider>
                <CustomersProvider>
                    <BrowserRouter>
                        <AppNavbar />
                        <AppContent>
                            <Switch>
                                {RoutesConfig.map(({ id, exact, path, component }) => (
                                    <Route
                                        key={id}
                                        exact={exact}
                                        path={path}
                                        component={component}
                                    />
                                ))}
                                <Redirect to={Routes.CHECK_CREDIT} />
                            </Switch>
                        </AppContent>
                    </BrowserRouter>
                </CustomersProvider>
            </CreditCardsProvider>
        </QueryClientProvider>
    );
};

export default App;
