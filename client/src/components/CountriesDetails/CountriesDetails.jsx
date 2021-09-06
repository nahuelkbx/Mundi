import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDetails } from "../../actions/index";
import { useEffect } from "react";
import { withRouter } from "react-router-dom";

function CountriesDetails(props) {
  let id = window.location.pathname;

  console.log(props.hi);

  const detail = useSelector((state) => state.countryDetail);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDetails(id.slice(15)));
  }, []);
  return (
    <div>
      <button onClick={() => props.history.goBack()}>Back</button>
      <h3>{detail.resultado && detail.resultado.name}</h3>
      <img src={`${detail.resultado && detail.resultado.image}`} alt="" />
    </div>
  );
}

export default withRouter(CountriesDetails);
