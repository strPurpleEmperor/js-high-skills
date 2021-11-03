import React from 'react';
import {HashRouter, Redirect, Route, Switch} from 'react-router-dom';
import {routerConfig} from "./router.config";
import {RouteProps} from "react-router";
export const Router = () => (
  <HashRouter>
    <Switch>
      {routerConfig.map((router:RouteProps)=>(
        <Route exact path={router.path} component={router.component}/>
      ))}
      <Redirect to='/solution' from='/*'/>
    </Switch>
  </HashRouter>
)