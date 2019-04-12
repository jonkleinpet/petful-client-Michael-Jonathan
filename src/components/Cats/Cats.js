import React, {Component} from "react";

export default class Cats extends Component{
  render(){
    return(
      <div className="cats">
        <h3>Cats</h3>
        <img src={this.props.imgURL} alt={this.props.imgDesc} />
        <ul>
          <li>Name: {this.props.name}</li>
          <li>Age: {this.props.age}</li>
          <li>Breed: {this.props.breed}</li>
          <li>Sex: {this.props.sex}</li>
          <li>Story: {this.props.story}</li>
        </ul>
      </div>
    )
  }
}