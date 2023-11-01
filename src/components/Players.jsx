import React, { useState } from "react";

const Players = ({ initialName, symbol, isActive }) => {
  const [playerName, setPlayerName] = useState(initialName); // [state, setState
  const [isEditing, setEditing] = useState(false);

  function handleEditClick() {
    // setEditing(isEditing ? false : true);
    setEditing((editing) => !editing); // using a function to set the state, as a react developer, you should use this method to set the state because you will get latest state
  }
  function handlePlayerNameChange(event) {
    setPlayerName(event.target.value);
  }

  let editPlayerName = <span className="player-name">{playerName}</span>;
  let editButton = <button onClick={handleEditClick}>Edit</button>;

  if (isEditing) {
    editPlayerName = (
      <input type="text" className="player-name" value={playerName} required onChange={handlePlayerNameChange} />
      //btnCaption = "Save";
    );
  }

  return (
    <li className={isActive ? 'active' : undefined}>
      <span className="player">
        {editPlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
};

export default Players;
