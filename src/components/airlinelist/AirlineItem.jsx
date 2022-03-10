import React from "react";
import { KAYAK_URL } from "../../constants/constants";
const AirlineItem = ({ airlineitem }) => {
  const { logoURL, name, alliance, phone, site } = airlineitem;

  return (
    <article className="airline-container">
      <div className="airline-item">
        <img src={`${KAYAK_URL}${logoURL}`} alt="logo" className="item-img" />

        <h2 className="item-name">
          {name}
          <div className="airline-info">
            <h4>{alliance === "none" ? "" : alliance}</h4>
            <h4>{phone}</h4>
            <h4 className="airline-info-url">
              <a href={site}>{site}</a>
            </h4>
          </div>
        </h2>
      </div>
    </article>
  );
};

export default AirlineItem;
