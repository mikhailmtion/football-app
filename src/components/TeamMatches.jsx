import React from "react";
import { useNavigate } from "react-router-dom";

function TeamMatches({ home, away, date, homeId, awayId }) {
  const navigate = useNavigate();
  return (
    <div className="team-match">
      <div className="team-match__card">
        <h4
          onClick={() => {
            navigate(`/team${homeId}`);
          }}
        >
          {home}
        </h4>
        <div className="team-match__date">
          <p>
            {date.slice(5, 10)} {date.slice(11, 16)}
          </p>
        </div>
        <h4
          onClick={() => {
            navigate(`/team${awayId}`);
          }}
        >
          {away}
        </h4>
      </div>
    </div>
  );
}

export default TeamMatches;
