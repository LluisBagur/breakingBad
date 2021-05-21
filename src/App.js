import React from 'react';
import styles from './app.module.scss';
import { Route, Switch } from 'react-router';
import CharList from './views/charList/charList'
import CharDetail from './views/charDetail/charDetail'


export const App = () => {

  return (
    <div className={styles.mainRoot}>
      <Switch>
        <Route path={`/characters/:id/details`}>
        <CharDetail/>
        </Route>
        <Route path={`/`}>
          <CharList/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;


