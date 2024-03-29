import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { useParams } from 'react-router-dom';

import { API_KEY, API_URL } from '../api';
import TeamInfo from '../components/TeamInfo';
import TeamMatches from '../components/TeamMatches';
import NotMatch from '../components/NotMatch';

function TeamPage() {
  const [team, setTeam] = useState([]);
  const [matchesTeam, setMatchesTeam] = useState([]);
  const { id } = useParams();

  useEffect(function getTeam() {
    axios
      .get(API_URL + `/teams/${id}`, {
        headers: {
          'X-Auth-Token': API_KEY,
        },
      })
      .then(({ data }) => {
        setTeam(data);
      })
      .catch((error) => {
        console.error(error);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(function getMatchesTeam() {
    axios
      .get(API_URL + `teams/${id}/matches`, {
        headers: {
          'X-Auth-Token': API_KEY,
        },
      })
      .then(({ data }) => {
        setMatchesTeam(data.matches);
      })
      .catch((error) => {
        console.error(error);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="container">
      <>
        <TeamInfo {...team} />
        {matchesTeam.length > 0 ? (
          <>
            {matchesTeam.map((match) => (
              <TeamMatches
                key={match.id}
                home={match.homeTeam.name}
                away={match.awayTeam.name}
                homeId={match.homeTeam.id}
                awayId={match.awayTeam.id}
                date={match.utcDate}
                name={team.name}
              />
            ))}
          </>
        ) : (
          <NotMatch />
        )}
      </>
    </div>
  );
}

export default TeamPage;
