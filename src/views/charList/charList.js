import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

// import Layout from "../App/Layout/Layout";
// import Button from "../Common/Button/Button";
// import Loading from "../Common/Loading/Loading";

export const UnconnectedCharList = ({
  i18n,
  t,
}) => {
  const history = useHistory();
  useEffect(() => {
 
  }, []);
  return (
    <>
      {" "}
      <button>PEPE</button>
    </>
  );
};
const CharList = connect((state) => ({
  
}))(UnconnectedCharList);
export default (CharList);
