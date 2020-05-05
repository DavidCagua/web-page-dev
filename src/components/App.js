import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './styles/App.css';

import Layout from './Layout';
import Home from '../pages/Home';
import Profile from '../pages/Profile';

function App() {
  return (
  <div className="App">
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Profile" component={Profile} />
        </Switch>
      </Layout>
    </BrowserRouter>
  </div>
  );
}

export default App;
