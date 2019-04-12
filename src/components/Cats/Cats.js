import React from "react";

export default function Cats(props) {
  console.log(props)
  const { displayCat } = props;
  
  return (
    <div className="cats">
      <h3>Cats</h3>
      <img src={displayCat.imgURL} alt={displayCat.imgDesc} />
      <ul>
        <li>Name: { displayCat.name}</li>
        <li>Age: { displayCat.age}</li>
        <li>Breed: { displayCat.breed}</li>
        <li>Sex: { displayCat.sex}</li>
        <li>Story: { displayCat.story}</li>
      </ul>
    </div>
  )
  
}