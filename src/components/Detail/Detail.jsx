import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

export default function Detail() {
  const [character, setCharacter] = useState({});
  const {detailId} = useParams();
  const navigate = useNavigate();

  const backToHome = () =>{
    navigate("/home");
  };

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
      .then((response) => response.json())
      .then((char) => {
        if (char.name) {
          setCharacter(char);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      })
      .catch((error) => {
        window.alert("No hay personajes con ese ID");
      });
    return setCharacter({});
  },[detailId]);

  return (
    <div>
      <div>
        <h1>NOMBRE: {character.name}</h1>
      </div>
      <div>
        <h2>STATUS: {character.status}</h2>
      </div>
      <div>
        <h2>ESPACIE: {character.species}</h2>
      </div>
      <div>
        <h2>GÉNERO: {character.gender}</h2>
      </div>
      <div>
        <h2>ORIGEN: {character.origin && character.origin.name}</h2>
      </div>
      <div>
        <h2>LOCATION: {character.location && character.location.name}</h2>
      </div>
      <div>
        <h2>EPISODES: {character.episode && character.episode.length}</h2>
      </div>
      <div>
        <img src={character.image} alt={character.name} />
      </div>
      <div>
        <button onClick={backToHome}>Back</button>
      </div>
    </div>
  )
};