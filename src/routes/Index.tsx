import React from 'react';
import Home from "./Home/Index";
import Details from "./Details/Index";
import {
  BrowserRouter,
  Route,
  Switch
} from "react-router-dom";
import { LocalizeProvider } from 'react-localize-redux';


const Router = () => (
  <LocalizeProvider>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/:name" component={Details} />
      {/* <Route path="*" component={() => "404 NOT FOUND"} /> */}
      </Switch>
    </BrowserRouter>
  </LocalizeProvider>
  
)

export default Router;
