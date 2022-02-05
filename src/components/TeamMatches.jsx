import React from "react";
import { useNavigate } from "react-router-dom";

function TeamMatches({ home, away, date, homeId, awayId,name }) {
  const navigate = useNavigate();
  return (
    <div className="team-match">
      <div className="team-match__card">
        <div className={home === name ? " team-match__title-active" : "team-match__title"}>
        <p 
          onClick={() => {
            navigate(`/team${homeId}`);
          }}
        >
          {home} 
        </p>
        </div>

        <div className="team-match__date">
          <p>
            {date.slice(5, 10)} {date.slice(11, 16)}
          </p>
        </div>
        <div className={away === name ? " team-match__title-active" : "team-match__title"}>
        <p
          onClick={() => {
            navigate(`/team${awayId}`);
          }}
        >
          {away}
        </p>
        </div>
      </div>
    </div>
  );
}

export default TeamMatches;
