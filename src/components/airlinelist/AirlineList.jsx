import React from "react";
import "./airlinelist.css";
import AirlineItem from "./AirlineItem";
import { useGlobalContext } from "../../context/context";

const AirlinesList = () => {
  const { airlinesData } = useGlobalContext();

  if (!airlinesData.filteredData.length) {
    return (
      <div className="empty-search section-center">
        <h3>unfortunately no items matched your search parameters</h3>
      </div>
    );
  }

  return (
    <section>
      <div className="section-center airline-center ">
        {airlinesData.filteredData.map((airlineItem) => {
          return (
            <AirlineItem key={airlineItem.code} airlineItem={airlineItem} />
          );
        })}
      </div>
    </section>
  );
};

export default AirlinesList;
