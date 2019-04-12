import React, {Component} from "react";
import Heading from "../Heading/Heading";
import Cats from "../Cats/Cats";
import Dogs from "../Dogs/Dogs";
import UserQueue from "../UserQueue/UserQueue";

export default function Dashboard(props) {
  const { cats, dogs, displayCat } = props;
  console.log(props)
  return (
    <div className="dashboard">
      <Heading />
      <Cats displayCat={ displayCat }/>
      <Dogs dogs={ dogs }/>
      <UserQueue />
    </div>
  );
}