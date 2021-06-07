import React, { useState, useEffect } from "react";
import DogBar from "./DogBar";
import DogInfo from "./DogInfo";
import Filter from "./Filter";

function App() {
  
  const [dogs, setDogs]=useState([]);
  const [showGoodDog, setShowGoodDog]=useState(false);
  const [selectedDogId,setSelectedDogId]=useState(null);

    useEffect(()=>{
        fetch(`http://localhost:3001/pups`)
        .then(r=>r.json())
        .then(setDogs)
    }, [])

  function onUpdatedDog(updatedDog){
    const upDatedDogs= dogs.map((dog)=> 
    dog.id===updatedDog.id ? updatedDog : dog)
    setDogs(upDatedDogs)
  }

  const selectedDog= dogs.find((dog)=> dog.id===selectedDogId);

  function handleFilter() {
    setShowGoodDog((showGoodDog)=>!showGoodDog)
  }

  let displayDogs = dogs;

  if(showGoodDog) {
    displayDogs = displayDogs.filter((dog)=>dog.isGoodDog)
  }
  
  return (
    <div className="App">
      <Filter showGoodDog={showGoodDog} onFilterClick={handleFilter}/>
      <DogBar dogs={displayDogs} onClickDog={setSelectedDogId} />
      <DogInfo dog={selectedDog} onUpdatedDog={onUpdatedDog}/>
    </div>
  );
}

export default App;