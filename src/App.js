import React from 'react';
import {  HashRouter, Route, Switch } from 'react-router-dom';
import Main from './components/Layout/Main';
import Login from './containers/Login';
import Logout from './containers/Logout';
import './assets/css/custom.css';

class App extends React.Component
{
	render() {
        return (
            <HashRouter>
                <div>
                    <Switch>
                        <Route path="/" exact component={Main}/>
                        <Route path="/login" component={Login}/>
                        <Route path="/logout" component={Logout}/>
                        <Route path="/dashboard" component={Main}/>
                        <Route path="/user" exact render={() => (<Main page="User"/>)}/>
                        <Route path="/user/create" render={(props) => (<Main page="UserAction" {...props}/>)}/>
                        <Route path="/user/update/:id" render={(props) => (<Main page="UserAction" {...props}/>)}/>
                        <Route path="/user/view/:id" render={(props) => (<Main page="UserView" {...props}/>)}/>
                        <Route path="/:other"component={Main}/>
                    </Switch>
                </div>
            </HashRouter>
        );
    }
}

export default App;