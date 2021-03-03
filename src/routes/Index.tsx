import React from 'react';
import Home from "./Home/Index";
import {
  BrowserRouter,
  Route,
  Switch,
  withRouter, RouteComponentProps
} from "react-router-dom";


const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/me" component={Home} />
    {/* <Route path="*" component={() => "404 NOT FOUND"} /> */}
    </Switch>
  </BrowserRouter>
)

export default Router;
