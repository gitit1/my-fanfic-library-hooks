import React from "react";
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import Wrapper from './components/Wrapper';
import Index from './containers/Index';
import Fandoms from './containers/Fandoms';

const App: React.FC = () => {

  return (
    <Wrapper>
      <Switch>
        <Route exact path="/" component={Index} />
        <Route exact path="/fandoms" component={Fandoms} />
        <Redirect to="/" />
      </Switch>
    </Wrapper>
  )
}

export default withRouter(App);