import React from 'react'
import Card from './components/card.jsx';
import heroes from "./heroes";

function App() {
    return (
      <div className="App">
  {heroes.map((hero) => 
  <Card name={hero.name} url={hero.url} universe={hero.universe} alterego={hero.alterego} occupation={hero.occupation} superpowers={hero.superpowers}></Card>
  )}
      </div>
    );
  }
  
  export default App;


