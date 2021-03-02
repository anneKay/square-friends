import React from 'react';
import Home from "./routes/Home/Index";
import {
  BrowserRouter,
  Redirect,
  Route,
  Switch
} from "react-router-dom";


const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/me" component={Home} />
      <Route path="*" component={() => <Redirect to="/" />} />
    </Switch>
  </BrowserRouter>
)

export default Router;
