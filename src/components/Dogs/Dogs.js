import React from "react";

export default function Dogs(props){
  console.log(props)
  const {displayDog} = props;
  return(
    !props.dogs ? null :
    <div className="dogs">
      <h3>Dogs</h3>
      <img src={displayDog.imgURL} alt={displayDog.imgDesc} />
      <ul>
        <li>Name: {displayDog.name}</li>
        <li>Age: {displayDog.age}</li>
        <li>Breed: {displayDog.breed}</li>
        <li>Sex: {displayDog.sex}</li>
        <li>Story: {displayDog.story}</li>
      </ul>
    </div>
  )
}