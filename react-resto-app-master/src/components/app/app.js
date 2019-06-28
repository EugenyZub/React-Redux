import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {MainPage, CartPage} from '../pages';
import AppHeader from '../app-header';
import WithRestoService from '../hoc';

import Background from './food-bg.jpg';

const App = ({RestoService}) => {
    console.log(RestoService.getMenuItems())
    return (
        <div style={{background: `url(${Background}) center center/cover no-repeat`}} className="app">
            <AppHeader total={50}/>
            <Switch>
                <Route path='/main' component={MainPage}/>
                <Route path='/cart' component={CartPage}/>
            </Switch>
        </div>
    )
}

export default WithRestoService()(App);