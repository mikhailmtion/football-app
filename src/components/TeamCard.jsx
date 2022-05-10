import React from 'react';
import { useNavigate } from 'react-router-dom';

function TeamCard({ id, name, tla, crestUrl }) {
  const navigate = useNavigate();
  return (
    <div className="team">
      <div
        className="team__card"
        onClick={() => {
          navigate(`/team${id}`);
        }}
      >
        <img
          src={
            crestUrl ||
            'https://upload.wikimedia.org/wikipedia/commons/d/d4/World_Flag_%282004%29.svg'
          }
          alt={name}
        />
        <h4>{tla ? tla : <span>{name.slice(0, 9)}</span>}</h4>
      </div>
    </div>
  );
}

export default TeamCard;
