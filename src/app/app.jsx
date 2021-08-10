import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import MainPage from '../pages/main-page/main-page';
import UnderConstructionPage from '../pages/under-construction-page/under-construction-page';

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/'>
          <MainPage />
        </Route>
        <Route>
          <UnderConstructionPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
