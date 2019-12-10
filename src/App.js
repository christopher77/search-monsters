import React from "react";
import "./App.css";
import { CardList } from "./components/card-list/card-list-component";
import { SearchBox } from "./components/search-box/search-box-component";

function App() {
  const [monsters, setMonsters] = React.useState([]);
  const [searchField, setSearchField] = React.useState("");

  function fetchingData() {
    fetch("https://jsonplaceholder.typicode.com/users").then(response =>
      response.json().then(users => setMonsters(users))
    );
  }
  fetchingData();

  const filteredMonsters = monsters.filter(monster =>
    monster.name.toLowerCase().includes(searchField.toLowerCase())
  );

  return (
    <div className="App">
      <h1>Search Monsters</h1>
      <SearchBox
        placeholder="search monsters"
        handleChange={e => {
          setSearchField(e.target.value);
        }}
      />
      <CardList monsters={filteredMonsters} />
    </div>
  );
}

export default App;
