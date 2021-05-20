import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './app.module.scss';
import { Route, Switch } from 'react-router';
import {getCharInfo} from './redux/characters/actions'

export const App = () => {
  const dispatch = useDispatch();
  const chars = useSelector(state => state.characters);

  useEffect(() =>{
    dispatch(getCharInfo())
  },[])
  
  return (
    <div className={styles.mainRoot}>
      <Switch>
        <Route path={`/`}>
          <div>CHARACTERS</div>
          {/* <button onClick={() => dispatch(getCharInfo())}>
        Getdata
      </button> */}
        </Route>
        <Route path={`/characters/details`}>
        <div>DETAILS</div>
        </Route>
      </Switch>
    </div>
  );
}

export default App;


