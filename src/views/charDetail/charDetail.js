import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from 'react-router-dom';
import Layout from "../../components/layout/layout";
import { selectInfoCharById } from '../../redux/characters/selectors'
import styles from './charDetail.module.scss'

import { getCharInfo } from "../../redux/characters/actions";
import ExtendedCard from "../../components/extendedCard/extendedCard";

const CharDetail = ({ detailInfo, collection, id }) => {
  console.log(detailInfo)

  return (
    <Layout>
      <ExtendedCard item={detailInfo} />
    </Layout>
  );
};

const mapStateToProps = (state, {id}) => ({
  // collection: state.data.characters,
  detailInfo: selectInfoCharById(state, Number(id)),
});

const mapDispatchToProps = (dispatch) => ({
  fetchCharacterStart: () => dispatch(getCharInfo()),
});

const CharDetailConnect = connect(mapStateToProps, mapDispatchToProps)(CharDetail);

const CharDetailParams =()=>{
  const params = useParams()
  return <CharDetailConnect id={params.id} />;
}
export default CharDetailParams