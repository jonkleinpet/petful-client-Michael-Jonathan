import React from "react";
import './styles/dogs.css';
import AdoptButton from "../AdoptButton/AdoptButton";

export default function Dogs(props) {
  
  const { displayDog, dogsQueue, handleStart, queueRunning } = props;
  
  const nextDogs = dogsQueue.map((dog, i) => {
    return(
      <img className='nextDogImg' key={i} alt={dog.imageDesc} src={dog.imageURL} />
    )
  })

  return(
    <div className="dogs">
      { displayDog
        ? (
          <>
            <h3>Dogs</h3>
            <img className='displayImg' src={ displayDog.imageURL } alt={ displayDog.imageDesc } />
            <ul>
              <li>Name: { displayDog.name }</li>
              <li>Age: { displayDog.age }</li>
              <li>Breed: { displayDog.breed }</li>
              <li>Sex: { displayDog.sex }</li>
              <li>Story: { displayDog.story }</li>
            </ul>
            <AdoptButton
              type={ 'dog' }
              queueRunning={ queueRunning }
              handleStart={ handleStart }
            />
            <div className="nextDogs">
              { nextDogs }
            </div>
          </>
        ) 
        :<div>No Dogs Are Left!</div>
      }
      
    </div>
  )
}