import React from "react";

function DogBar({dogs, onClickDog}){

    const dogSelection=dogs.map((dog)=>(
        <span key={dog.id} onClick={()=>onClickDog(dog.id)}>
            {dog.name}
        </span>
    ))

    return (
        <div id="dog-bar">{dogSelection}</div>
    )
}

export default DogBar