import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
  selectIsLoading,
  selectAllCharInfo,
} from "../../redux/characters/selectors";
import { getCharInfo } from "../../redux/characters/actions";
import Layout from "../../components/layout/layout";
import Loading from "../../components/Loading/Loading";
import Card from "../../components/card/card";
import styles from "./charList.module.scss";

export const CharList = ({ fetchCharacter, characters, loading }) => {
  useEffect(() => {
    fetchCharacter();
  }, [fetchCharacter]);

  return (
    <Layout>
      <div className={styles.mainContainer}>
        {loading ? (
          <Loading />
        ) : (
          <>
            {characters.map((item) => (
              <Card item={item} key={item.char_id}/>
            ))}
          </>
        )}
      </div>
    </Layout>
  );
};

const mapStateToProps = (state) => ({
  characters: selectAllCharInfo(state),
  loading: selectIsLoading(state),
});

const mapDispatchToProps = (dispatch) => ({
  fetchCharacter: () => dispatch(getCharInfo()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CharList);
