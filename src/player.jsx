import { useState } from "react";

export default function Player() {
  const divStyle = {
    border: "3px solid darkblue",
    marginTop: "20px",
    padding: "20px",
    borderRadius: "14px",
  };
  const [player, playerFunction] = useState(11);
  const addPlayer = () => {
    const newPlayerAdded = player + 1;
    playerFunction(newPlayerAdded);
  };
  const removePlayer = () => {
    const newPlayerAdded = player - 1;
    playerFunction(newPlayerAdded);
  };
  return (
    <div style={divStyle}>
      <h3>Player : {player}</h3>
      <button onClick={addPlayer}>Add Player</button>
      <button onClick={removePlayer}>Remode Player</button>
    </div>
  );
}
