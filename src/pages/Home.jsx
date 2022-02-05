import React, { useState, useEffect } from "react";
import axios from "axios";
import { API_KEY, API_URL } from "../api";
import League from "../components/League";
import Loader from "../components/Loader";
function Home() {
  const [leagues, setLeagues] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(function getLeagues() {
    axios
      .get(API_URL + `competitions?plan=TIER_ONE/`, {
        headers: {
          "X-Auth-Token": API_KEY,
        },
      })
      .then(({ data }) => {
        setLeagues(data.competitions);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const filtredLeague = leagues.filter(
    (league) =>
      league.name.toLowerCase().includes(search.toLowerCase()) ||
      league.area.name.toLowerCase().includes(search.toLowerCase())
  );
  const onChangeSearchInput = (event) => {
    setSearch(event.target.value);
  };

  return (
    <div className="container">
      {filtredLeague.length > 0 ? (
        <>
          <div className="search">
            <input
              value={search}
              onChange={onChangeSearchInput}
              type="text"
              id="search"
              placeholder="Search..."
            />
          </div>
          <div className="wrapper-leagues">
            {filtredLeague.map((league) => (
              <League
                key={league.id}
                image={league.emblemUrl}
                imageCountry={league.area.ensignUrl}
                country={league.area.name}
                {...league}
              />
            ))}
          </div>
        </>
      ) : (
        <Loader />
      )}
      <></>
    </div>
  );
}

export default Home;
