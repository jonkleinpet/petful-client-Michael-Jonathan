import React from "react";
import Heading from "../Heading/Heading";
import Cats from "../Cats/Cats";
import Dogs from "../Dogs/Dogs";
import UserQueue from "../UserQueue/UserQueue";
import "./styles/dashboard.css";

export default function Dashboard(props) {
  const {cats, dogs, displayCat, displayDog, users, handleStart } = props;
  console.log(props)
  return (
    <>
      <Heading />
      <div className="dashboard">
        {
          !!cats
            ? <Cats handleStart={ handleStart } displayCat={ displayCat } catsQueue={ cats } />
            : <div>No More Cats!</div>
        }
        {
          !!dogs
            ? <Dogs handleStart={ handleStart } displayDog={ displayDog } dogsQueue={ dogs } />
            : <div>No More Dogs!</div>
        }
        <UserQueue users={ users } />
      </div>
    </>
  );
}