import React from "react";
import "./airlines-container.css";
import Loading from "../loading/Loading";
import AirlinesList from "../airlinelist/AirlineList";
import AirlinesFilter from "../airlinesfilter/AirlinesFilter";
import { useGlobalContext } from "../../context/context";

const AirlinesContainer = () => {
  const { isLoading } = useGlobalContext();

  return (
    <main className="main-container">
      <h1 className="section-center main-title">Airlines</h1>
      <AirlinesFilter />
      {isLoading ? <Loading /> : <AirlinesList />}
    </main>
  );
};

export default AirlinesContainer;
