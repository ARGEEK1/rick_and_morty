import { useState } from 'react';

export default function SearchBar(props) {
  const [character, setCharacter] = useState("");

  const handleInputChange = (e) => {
    setCharacter(e.target.value);
  };

  return (
    <div>
      <input onChange={handleInputChange} type='search' value={character} />
      <button onClick={() => props.onSearch(character)}>Agregar</button>
    </div>
  );
}
