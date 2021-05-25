import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from 'react-router-dom';
import Layout from "../../components/layout/layout";
import { selectInfoCharById } from '../../redux/characters/selectors'
import { selectRandomQuote, selectIsQuoteLoading} from '../../redux/quote/selectors'
import { getQuote } from "../../redux/quote/actions";
import ExtendedCard from "../../components/extendedCard/extendedCard";


export const CharDetail = ({ detailInfo, fetchRandomQuote, randomQuote, loadingQuote }) => {
  useEffect(() => {
    fetchRandomQuote(detailInfo.name.replace(" ", "+"));
    // eslint-disable-next-line
  }, [fetchRandomQuote]);
  
  return (
    <Layout>
      <ExtendedCard item={detailInfo} quote={randomQuote} loading={loadingQuote} />
    </Layout>
  );
};

const mapStateToProps = (state, {id}) => ({
  detailInfo: selectInfoCharById(state, Number(id)),
  randomQuote: selectRandomQuote(state),
  loadingQuote: selectIsQuoteLoading(state),
});

const mapDispatchToProps = (dispatch) => ({
  fetchRandomQuote: (name) => dispatch(getQuote(name)),
});

const CharDetailConnect = connect(mapStateToProps, mapDispatchToProps)(CharDetail);

const CharDetailParams =()=>{
  const params = useParams()
  return <CharDetailConnect id={params.id} />;
}
export default CharDetailParams