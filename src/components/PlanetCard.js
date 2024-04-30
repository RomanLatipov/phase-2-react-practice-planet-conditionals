import React from 'react'
import PlanetFacts from "./PlanetFacts"
import { useState } from 'react'

function PlanetCard({planet}) {
  const [toggle, setToggle] = useState(true);
  const isPlanet = planet.is_planet
  
  return (
    <div className="card" onClick={() => {
      setToggle(!toggle);
      console.log('Toggle!')}}>
      {toggle 
        ? 
        <div>
          <h2>{planet.name}</h2>
          <img className={isPlanet ? "" : `not-planet`} src={planet.image} alt={planet.name} />
        </div>
        :
        <PlanetFacts planet={planet}/>
    }
    </div>
  )
}

export default PlanetCard
