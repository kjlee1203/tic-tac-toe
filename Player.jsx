import { useState } from "react";

export default function Player({ initialName, symbol, isActive }) {
  // player name
  const [playerName, setPlayerName] = useState(initialName);
  // whether we are editing the player or not
  const [isEditing, setIsEditing] = useState(false);

  function handleEditClick() {
    // invert the boolean if the button is clicked
    // but setIsEditing(!isEditing) is not recommended
    // use function instead
    setIsEditing((editing) => !editing);
  }

  function handleChange(event) {
    // handle typing in the input box
    setPlayerName(event.target.value);
  }

  // if state is false display player name, edit button
  // else display input box, save button
  let editablePlayerName = <span className="player-name">{playerName}</span>;

  if (isEditing) {
    editablePlayerName = (
      <input type="text" required value={playerName} onChange={handleChange} />
    );
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
