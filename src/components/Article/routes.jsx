import React, { useContext } from 'react';
import { Route, Switch } from 'react-router-dom';
import { UserContext } from '../Authentication/UserProvider';

import Index from './index';
import New from './New';
import Edit from './Edit';
import Show from './Show'
import Delete from './Delete'


const Routes = () => {
  const { user } = useContext(UserContext);

  return (
    <Switch>
      <Route exact path="/articles" component={Index}/>
      <Route exact path="/articles/show/:id" component={Show}/>
      {user && user.token ? (
        <>
          <Route exact path="/articles/new" component={New}/>
          <Route exact path="/articles/edit/:id" component={Edit}/>
          <Route exact path="/articles/destroy/:id" component={Delete}/>
        </>
      ) : null}
    </Switch>
  );
}
export default Routes;