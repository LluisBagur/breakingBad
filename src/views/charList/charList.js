import React, { useEffect } from "react";
import { connect } from "react-redux";
import Layout from "../../components/layout/layout";
import {useSelector, useDispatch } from 'react-redux';
// import {getCharInfo} from '../../redux/characters/actions';
import Card from "../../components/card/card";
import styles from './charList.module.scss'

import { getCharInfo } from "../../redux/characters/actions";

const CharList = ({ fetchCharacterStart, collection }) => {
  const dispatch = useDispatch();
  const characters = useSelector(state => state.data.characters)
  const loading = useSelector(state => state.data.loading)
  const errors = useSelector(state => state.data.errors)


  useEffect(() => {
    dispatch(getCharInfo());
  }, []);
  console.log(characters)

  return (
    <Layout>
      {/* {loa} */}
      {characters.map((item) =>(
        <Card item={item} />
        // <div className={styles.item}>{i.name}</div>
      ))}
    </Layout>
  );
};

export default CharList;

// const mapStateToProps = (state) => ({
//   collection: state.data.characters,
// });

// const mapDispatchToProps = (dispatch) => ({
//   fetchCharacterStart: () => dispatch(getCharInfo()),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(CharList);
