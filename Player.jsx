import { useState } from "react";

export default function Player({ name, symbol }) {
  // whether we are editing the player or not
  const [isEditing, setIsEditing] = useState(false);

  function handleEditClick() {
    // invert the boolean if the button is clicked
    // but setIsEditing(!isEditing) is not recommended
    // use function instead
    setIsEditing((editing) => !editing);
  }

  // if state is false display player name, edit button
  // else display input box, save button
  let playerName = <span className="player-name">{name}</span>;

  if (isEditing) {
    playerName = <input type="text" required value={name} />;
  }

  return (
    <li>
      <span className="player">
        {playerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
