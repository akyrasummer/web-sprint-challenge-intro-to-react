import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Character from './Character'

const urlPlanets = 'http://localhost:9009/api/planets'
const urlPeople = 'http://localhost:9009/api/people'

function App() {
  const [people, setPeople] = useState([]);
  const [planets, setPlanets] = useState([]);
  // ❗ Create state to hold the data from the API
  // ❗ Create effects to fetch the data and put it in state

useEffect(() => {
  axios.get(urlPeople)
  .then(response => {
    setPeople(response.data);
  })
  .catch(error => {
    console.error('Error fetching people:', error)
  });

  axios.get(urlPlanets)
  .then(response => {
    setPlanets(response.data);
  })
  .catch(error => {
    console.error('Error fetching planets:', error)
  });
}, []);

const peopleWithPlanets = people.map(character => {
  const homeworld = planets.find(planet => planet.id === character.homeworld)
return { ...character, homeworld }
})

  return (
    <div>
      <h2>Star Wars Characters</h2>
      <p>See the README of the project for instructions on completing this challenge</p>
      <div>
      {peopleWithPlanets.length > 0 ? (
        peopleWithPlanets.map(character => (
          <Character key={character.id} character={character} />
        ))
      ) : (
        <p>Loading characters...</p>
      )}
    </div>
    </div>
  )
}

export default App

// ❗ DO NOT CHANGE THE CODE  BELOW
if (typeof module !== 'undefined' && module.exports) module.exports = App
