import React from 'react';
import Home from "./Home/Index";
import Details from "./Details/Index";
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
      <Route exact path="/:name" component={Details} />
    {/* <Route path="*" component={() => "404 NOT FOUND"} /> */}
    </Switch>
  </BrowserRouter>
)

export default Router;
