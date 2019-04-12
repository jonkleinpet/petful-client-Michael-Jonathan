import React from "react";
import Heading from "../Heading/Heading";
import Cats from "../Cats/Cats";
import Dogs from "../Dogs/Dogs";
import UserQueue from "../UserQueue/UserQueue";

export default function Dashboard(props) {
  const {cats, dogs, displayCat, displayDog, users, handleStart } = props;
  console.log(props)
  return (
    <div className="dashboard">
      <Heading />
      <Cats handleStart={ handleStart } displayCat={ displayCat } catsQueue={cats} />
      <Dogs handleStart={ handleStart } displayDog={ displayDog } dogsQueue={dogs} />
      <UserQueue users={ users } />
    </div>
  );
}