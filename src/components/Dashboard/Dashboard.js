import React from "react";
import Heading from "../Heading/Heading";
import Cats from "../Cats/Cats";
import Dogs from "../Dogs/Dogs";
import UserQueue from "../UserQueue/UserQueue";
import "./styles/dashboard.css";

export default function Dashboard(props) {

  const {
    cats,
    dogs,
    displayCat,
    displayDog,
    users,
    handleStart,
    queueRunning
  } = props;
  
  return (
    <>
      <Heading />
      <div className="dashboard">
        {
          !!cats
            
            ? <Cats
              queueRunning={ queueRunning }
              handleStart={ handleStart }
              displayCat={ displayCat }
              catsQueue={ cats } />
            
            : <div>No More Cats!</div>
        }
        {
          !!dogs
            
            ? <Dogs  
              queueRunning={ queueRunning }
              handleStart={ handleStart }
              displayDog={ displayDog }
              dogsQueue={ dogs } />
            
            : <div>No More Dogs!</div>
        }
        <UserQueue users={ users } />
      </div>
    </>
  );
}