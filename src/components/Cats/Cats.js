import React from "react";
import './styles/cats.css';
import AdoptButton from '../AdoptButton/AdoptButton';

export default function Cats(props) {
  console.log(props)
  const {displayCat, catsQueue, handleStart} = props;
  const nextCats = catsQueue.map((cat, i) => {
    return(
      <img className='nextCatImg' key={i} alt={cat.imageDesc} src={cat.imageURL} />
    )
  })
  
  return (
    <div className="cats">
      <h3>Cats</h3>
      <img className='displayImg' src={displayCat.imageURL} alt={displayCat.imageDesc} />
      <ul>
        <li>Name: {displayCat.name}</li>
        <li>Age: {displayCat.age}</li>
        <li>Breed: {displayCat.breed}</li>
        <li>Sex: {displayCat.sex}</li>
        <li>Story: {displayCat.story}</li>
      </ul>
      <AdoptButton handleStart={handleStart} />
      <div className="nextCats">
        {nextCats}
      </div>
    </div>
  )
}