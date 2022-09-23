import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Info } from "../component/info";

import "../../styles/tattooStyles.css";

export const TattooStyles = () => {
  const { store, actions } = useContext(Context);

  return store.styles.map((singleStyle, i) => {
    return (
      <div className="styles-card-container" key={i}>
        <div className="styles-card">
          <div className="styles-img-box">
            <img src={singleStyle.image} alt="Tattoo Style" />
          </div>
          <div className="styles-card-content">
            <h1 className="styles-card-heading">{singleStyle.style}</h1>
              <Info />
          </div>
        </div>
      </div>
    );
  });
};
