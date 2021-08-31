import React from "react";
import { useDispatch } from "react-redux";
import { getCountry } from "../../actions/index";
import { useEffect } from "react";
import Countries from "../Countries/Countries";

function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCountry());
  }, []);

  return (
    <div>
      <Countries />
    </div>
  );
}

export default Home;
