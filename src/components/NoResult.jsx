import React from 'react';


function NoResult({setSearchTeam}) {
  return (
    <div className="noresult">
      <div className="noresult__title">
        <h3>No result found</h3>
        <button onClick={() => setSearchTeam(' ')}> Search again</button>
      </div>
    </div>
  );
}

export default NoResult;
