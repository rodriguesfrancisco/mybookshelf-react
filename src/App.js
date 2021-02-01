import React, { Fragment } from 'react';
import Header from './components/Header';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Login from './Login';
import Landing from './Landing';
import useFindUser from './hooks/useFindUser';
import { UserContext } from './hooks/UserContext';

function App() {
  const { user, setUser, isLoading } = useFindUser();

  return (
    <Router>
      <UserContext.Provider value={{ user, setUser, isLoading }}>
        <Switch>
          <Fragment>
            <Header />
            <Route path="/login" component={Login} exact={true} />
            <Route path="/" component={Landing} exact={true} />
          </Fragment>
        </Switch>
      </UserContext.Provider>
    </Router>
  );
}

export default App;
