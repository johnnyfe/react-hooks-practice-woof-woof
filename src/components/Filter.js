import React from "react";

function Filter({onFilterClick, showGoodDog}){

    return (
        <div id="filter-div">
            <button id="good-dog-filter" onClick={onFilterClick}>Filter good dogs: {showGoodDog ? "ON" : "OFF"}</button>
        </div>
    )
}

export default Filter