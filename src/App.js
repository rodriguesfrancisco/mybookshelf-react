import React, { Fragment } from 'react';
import Header from './components/Header';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Login from './Login';
import Home from './Home';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <Fragment>
          <Header />
          <Route path="/" component={Home} />
        </Fragment>
      </Switch>
    </Router>
  );
}

export default App;
