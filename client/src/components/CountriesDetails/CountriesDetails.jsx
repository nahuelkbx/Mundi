import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDetails } from "../../actions/index";
import { useEffect } from "react";

function CountriesDetails() {
  let id = window.location.pathname;

  const detail = useSelector((state) => state.countryDetail);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDetails(id.slice(15)));
  }, []);
  return (
    <div>
      <h3>{detail.resultado && detail.resultado.name}</h3>
      <img src={`${detail.resultado && detail.resultado.image}`} alt="" />
    </div>
  );
}

export default CountriesDetails;
