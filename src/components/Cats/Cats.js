import React from "react";
import './styles/cats.css';

export default function Cats(props) {
  console.log(props)
  const {displayCat, catsQueue} = props;
  const nextCats = catsQueue.map((cat, i) => {
    return(
      <div key={i}>
        <img className='nextCatImg' src={cat.imageURL} />
      </div>
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
      <div className="nextCats">
        {nextCats}
      </div>
    </div>
  )
}