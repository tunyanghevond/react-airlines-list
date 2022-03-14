import React from "react";
import "./airline-filter.css";
import { useGlobalContext } from "../../context/context";

const AirlinesFilter = () => {
  const { filters, onChangeHandler } = useGlobalContext();
  const { OW, ST, SA } = filters;
  return (
    <section className="section-center">
      <h3 className="form-title">Filter by Alliances</h3>
      <form className="filter-form ">
        <div className="form-group">
          <div>
            <input
              type="checkbox"
              name="OW"
              id="oneworld"
              checked={OW}
              onChange={onChangeHandler}
            />
            <label htmlFor="oneworld">oneworld</label>
          </div>
          <div>
            <input
              type="checkbox"
              name="ST"
              id="skyTeam"
              checked={ST}
              onChange={onChangeHandler}
            />
            <label htmlFor="skyTeam">sky team</label>
          </div>
          <div>
            <input
              type="checkbox"
              name="SA"
              id="staralliance"
              checked={SA}
              onChange={onChangeHandler}
            />
            <label htmlFor="staralliance">star alliance</label>
          </div>
        </div>
      </form>
    </section>
  );
};

export default AirlinesFilter;
