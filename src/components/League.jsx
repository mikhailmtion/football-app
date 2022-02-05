import React from "react";
import { useNavigate } from "react-router-dom";

function League({ id, name, image, imageCountry, country }) {
  const navigate = useNavigate();
  return (
    <div className="league">
      <div
        className="league__card"
        onClick={() => {
          navigate(`/competition${id}`);
        }}
      >
        <img
          src={
            image ||
            imageCountry ||
            "https://e7.pngegg.com/pngimages/581/147/png-clipart-2014-fifa-world-cup-premier-league-serie-a-football-football-3d-computer-graphics-sport.png"
          }
          alt={name}
        />
        <div className="league__title">
          <h4>{name}</h4>
          <span>{country}</span>
        </div>
      </div>
    </div>
  );
}

export default League;
