import "./App.css";
import Nav from "./components/Nav/Nav";
import Cards from "./components/Cards/Cards.jsx";
import About from "./components/About/About";
import Detail from "./components/Detail/Detail";
import Form from "./components/Form/Form";

import { useState, useEffect } from "react";

import { Route, Routes, useLocation, useNavigate } from "react-router-dom";

function App() {
  const [characters, setCharacters] = useState([]);
  const Location = useLocation();

  

  const navigate = useNavigate();
  const [access, setAccess] = useState(false);
  const username = "rickandmorty@gmail.com";
  const password = "123abc";

  useEffect(() => {
    !access && navigate("/");
  }, [access]);

  const login = (userData) => {
    if (username === userData.username && password === userData.password) {
      setAccess(true);
      navigate("/home");
    } else {
      alert('Incorrect user or password');
    }
  };

  const logout = () => {
    setAccess(false);
      navigate("/")
  };

  

  const onSearch = (character) => {
    let ID = characters.find((char) => char.id === parseInt(character));
    if (ID) {
      window.alert(`El ID ${character} ya está agregado`);
    } else {
      fetch(`http://localhost:3001/rickandmorty/onsearch/${character}`)
        .then((response) => response.json())
        .then((data) => {
          if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
          }
        })
        .catch((error) => {
          window.alert("No hay personajes con ese ID");
        });
    }
  };

  const onClose = (id) => {
    setCharacters(characters.filter((character) => character.id !== id));
  };

  return (
    <div
      className="App"
      id={Location.pathname === "/" && "appBack"}
      style={{ padding: "25px" }}
    >
      <div>
        {Location.pathname === "/" ? null : <Nav onSearch={onSearch} logout={logout}/>}
      </div>
      <div>
        <Routes>
          <Route path="/" element={<Form login={login} />} />
          <Route
            path="/home"
            element={<Cards characters={characters} onClose={onClose} />}
          />
          <Route path="/about" element={<About />} />
          <Route path="/detail/:detailId" element={<Detail />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
