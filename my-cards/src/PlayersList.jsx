import React from "react";
import Player from "./player";
import players from "./players";

function PlayersList() {
  return (
    <div className="container py-5">
      <h1 className="text-center fw-bold mb-2">⚽ Football Legends</h1>

      <p className="text-center text-secondary mb-5">
        Discover our favorite football players
      </p>

      <div className="row g-4">
        {players.map((player, index) => (
          <div className="col-12 col-sm-6 col-lg-3" key={index}>
            <Player
              name={player.name}
              team={player.team}
              nationality={player.nationality}
              jerseyNumber={player.jerseyNumber}
              age={player.age}
              image={player.image}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default PlayersList;
