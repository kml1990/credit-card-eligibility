import React from 'react';
import ReactDOM from 'react-dom';
import 'reflect-metadata';
import { dependenciesContainer, initDependencies } from './di/Dependencies';
import { DependencyProvider } from './di/DependencyContext';
import App from './components/app/App';
import Error from './components/common/error/Error';

const root = document.getElementById('root');

(async () => {
    try {
        await initDependencies();

        ReactDOM.render(
            <React.StrictMode>
                <DependencyProvider container={dependenciesContainer}>
                    <App />
                </DependencyProvider>
            </React.StrictMode>,
            root,
        );
    } catch (e) {
        ReactDOM.render(<Error error={e} />, root);
    }
})();
