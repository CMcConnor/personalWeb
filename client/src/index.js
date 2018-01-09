import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Route,BrowserRouter, Switch } from 'react-router-dom';

import Root from './Root'
import Foo from './Foo'
import Movie from './Movie'

ReactDOM.render(
  <div>
    <App />
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Root}/>
        <Route path='/foo' component={Foo}/>
        <Route exact path='/movies/:movieId' component={Movie}/>
      </Switch>
    </BrowserRouter>
  </div>,
  document.getElementById('root'));
