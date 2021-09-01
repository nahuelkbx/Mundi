import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Filter } from "../../actions/index";
import Countries from "../Countries/Countries";

function Continent() {
  const country = useSelector((state) => state.country);
  const dispatch = useDispatch();

  let continent = window.location.pathname;

  useEffect(() => {
    dispatch(Filter(continent.slice(10)));
  }, []);

  return <div></div>;
}

export default Continent;
