import React, {Component} from "react";
import config from "../../config";
import Heading from "../Heading/Heading";
import Cats from "../Cats/Cats";
import Dogs from "../Dogs/Dogs";
import UserQueue from "../UserQueue/UserQueue";

export default class Dashboard extends Component {
  state = {
    cats: [],
    dogs: [],
    users: []
  }

  getCats(){
    fetch(`${config.API_ENDPOINT}/cat`)
      .then(res => {
        if(!res.ok){
        }
        return res.json();
      })
      .then(res => {
        this.setState()
      })
  }
  
  render() {
    return (
      <div className="dashboard">
        <Heading />
        <Cats />
        <Dogs />
        <UserQueue />
      </div>
    );
  }
}