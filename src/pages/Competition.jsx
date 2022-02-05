import React, { useState, useEffect } from "react";
import axios from "axios";
import { API_KEY, API_URL } from "../api";
import TeamCard from "../components/TeamCard";
import Matches from "../components/Matches";
import { useParams } from "react-router-dom";
import DayCard from "../components/DayCard";
import NotMatch from "../components/NotMatch";
import Loader from "../components/Loader";
import NoResult from "../components/NoResult";

function Competition() {
  const [teams, setTeams] = useState([]);
  const [competition, setCompetition] = useState([]);
  const [matches, setMatches] = useState([]);
  const [dayCurrent, setDayCurrent] = useState(30);
  const [searchTeam, setSearchTeam] = useState("");
  const { id } = useParams();

  useEffect(function getTeams() {
    axios
      .get(API_URL + `competitions/${id}/teams/`, {
        headers: {
          "X-Auth-Token": API_KEY,
        },
      })
      .then(({ data }) => {
        setCompetition(data.competition);
        setTeams(data.teams);
      })
      .catch((error) => {
        console.error(error);
      });
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(function getMatches() {
    axios
      .get(API_URL + `competitions/${id}/matches?status=SCHEDULED`, {
        headers: {
          "X-Auth-Token": API_KEY,
        },
      })
      .then(({ data }) => {
        setMatches(data.matches);
      })
      .catch((error) => {
        console.error(error);
      });
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const days = [...new Set(matches.map((bill) => bill.matchday))];

  const filtredTeams = teams.filter((league) =>
    league.name.toLowerCase().includes(searchTeam.toLowerCase())
  );

  const onChangeSearchInputTeam = (event) => {
    setSearchTeam(event.target.value);
  };

  return (
    <div className="container">
      {teams.length > 0 ? (
        <>
          <div className="competition-title">
            <h1>{competition.name}</h1>
            <div className="search__teams">
              <input
                value={searchTeam}
                onChange={onChangeSearchInputTeam}
                type="text"
                id="search"
                placeholder="Search..."
              />
            </div>
          </div>
          {filtredTeams.length > 0 ?  (
            <>
            <h3>Teams</h3>
          <div className="wrapper-teams">
            {filtredTeams.map((team) => (
              <TeamCard key={team.id} {...team} />
            ))}
          </div>
            </>
          ): (
            <NoResult
            setSearchTeam={setSearchTeam}
            />
          )}


          {days.length > 0 ? (
            <>
              <h3>Matchdays</h3>
              <div className="days">
                {days.map((day) => (
                  <DayCard
                    key={day}
                    day={day}
                    dayCurrent={dayCurrent}
                    setDayCurrent={setDayCurrent}
                  />
                ))}
              </div>
              <div className="wrapper-matches">
                {matches
                  .filter((e) => e.matchday === dayCurrent)
                  .map((match) => (
                    <Matches
                      key={match.id}
                      date={match.utcDate}
                      home={match.homeTeam.name}
                      away={match.awayTeam.name}
                      homeId={match.homeTeam.id}
                      awayId={match.awayTeam.id}
                    />
                  ))}
              </div>
            </>
          ) : (
            <NotMatch />
          )}
        </>
      ) : (
        <Loader />
      )}
    </div>
  );
}

export default Competition;
