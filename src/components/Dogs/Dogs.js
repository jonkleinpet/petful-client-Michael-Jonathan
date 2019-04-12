import React from "react";
import './styles/dogs.css';

export default function Dogs(props){
  console.log(props)
  const {displayDog, dogsQueue} = props;
  const nextDogs = dogsQueue.map((dog, i) => {
    return(
      <div key={i}>
        <img className='nextDogImg' src={dog.imageURL} />
      </div>
    )
  })
  
  return(
    <div className="dogs">
      <h3>Dogs</h3>
      <img className='displayImg' src={displayDog.imageURL} alt={displayDog.imageDesc} />
      <ul>
        <li>Name: {displayDog.name}</li>
        <li>Age: {displayDog.age}</li>
        <li>Breed: {displayDog.breed}</li>
        <li>Sex: {displayDog.sex}</li>
        <li>Story: {displayDog.story}</li>
      </ul>
      <div className="nextDogs">
        {nextDogs}
      </div>
    </div>
  )
}