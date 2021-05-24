import React from 'react';
import { Route, Switch, Redirect } from 'react-router';
import { connect } from "react-redux";
import CharList from './views/charList/charList'
import CharDetail from './views/charDetail/charDetail'
import styles from './app.module.scss';


export const App = ({haveInfo}) => {

  return (
    <div className={styles.mainRoot}>
      <Switch>
        <Route
          exact
          path={`/characters/:id/details`}
          render={() =>
            haveInfo.length <= 0 ? <Redirect to="/" /> : <CharDetail />
          }
        />
        <Route path={`/`}>
          <CharList/>
        </Route>
      </Switch>
    </div>
  );
}

const mapStateToProps = (state) => ({
  haveInfo: state.data.characters,
});

export default connect(mapStateToProps)(App);


