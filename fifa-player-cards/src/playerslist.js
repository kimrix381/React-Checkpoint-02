// src/PlayersList.js
import React from "react";
import Player from "./player.js";
import players from "./players.js";

const containerStyle = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  marginTop: "2rem",
};

const PlayersList = () => {
  return (
    <div style={containerStyle}>
      {players.map((player, index) => (
        <Player key={index} {...player} />
      ))}
    </div>
  );
};

export default PlayersList;
