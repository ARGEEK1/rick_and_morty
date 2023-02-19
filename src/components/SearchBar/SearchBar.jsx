import { useState } from 'react';
import styles from './SearchBar.module.css'

export default function SearchBar(props) {
  const [character, setCharacter] = useState("");

  const handleInputChange = (e) => {
    setCharacter(e.target.value);
  };

  return (
    <div className={styles.search}>
      <input className={styles.inpSearch}onChange={handleInputChange} type='search' value={character} />
      <button className={styles.btnSearch} onClick={() => props.onSearch(character)}>Agregar</button>
    </div>
  );
}
