import React from "react";
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import Index from './containers/Index';
import Wrapper from './components/Wrapper';

const App: React.FC = () => {

  return (
    <Wrapper>
      <Switch>
        <Route exact path="/" component={Index} />
        <Redirect to="/" />
      </Switch>
    </Wrapper>
  )
}

export default withRouter(App);