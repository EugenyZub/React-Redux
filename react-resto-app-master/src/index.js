import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';
import ErrorBoundary from './components/error-boundry';
import RestoServices from './services/resto-service';
import RestoServicesContext from './components/resto-service-context/';
import store from './store';

import './index.scss';
import RestoService from './services/resto-service';

const restoService = new RestoService();

ReactDOM.render(
    <Provider store={store}>
        <ErrorBoundary>
            <RestoServicesContext.Provider value={restoService}>
                <Router>
                    <App/>
                </Router>
            </RestoServicesContext.Provider>
        </ErrorBoundary>
    </Provider>
    , document.getElementById('root'));

