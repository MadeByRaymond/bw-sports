import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Layout from './HOC/layout';

import Home from './components/Home';
import League from './components/league';
import ERROR404 from './components/Errors/error404';

 const Routes = () => {
   return (
      <Layout>
       <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/league/:id" exact component={League} />
        <Route path="/:id" component={ERROR404} />
       </Switch>
      </Layout>
   );
 }

 export default Routes;