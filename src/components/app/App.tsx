import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { Routes, RoutesConfig } from '../../routes/Routes';

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <Switch>
                {RoutesConfig.map(({ id, exact, path, component }) => (
                    <Route key={id} exact={exact} path={path} component={component} />
                ))}
                <Redirect to={Routes.HOME} />
            </Switch>
        </BrowserRouter>
    );
};

export default App;
