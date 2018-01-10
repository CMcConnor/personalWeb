import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './Header';
import { Route,BrowserRouter, Switch } from 'react-router-dom';

import Frontpage from './Frontpage'
import Movies from './Movie'

ReactDOM.render(
  <div>
    <Header />
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Frontpage}/>
        <Route exact path='/movies/:movieId' component={Movies}/>
      </Switch>
    </BrowserRouter>
  </div>,
  document.getElementById('root'));
