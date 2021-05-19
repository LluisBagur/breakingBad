import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import styles from './app.modules.scss';
import { Router, Switch } from 'react-router';

export const App = () => {
  return (
    <div className={styles.mainRoot}>
      <Switch>
        <Route path={`/${}/characters`}>

        </Route>
        <Route path={`/${}/characters/details`}>
          
        </Route>
      </Switch>
    </div>
  );
}

export default App;
