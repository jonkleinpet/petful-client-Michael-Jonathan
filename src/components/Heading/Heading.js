import React, {Component} from "react";
import {Link} from "react-router-dom";
import "./styles/heading.css";

export default class Heading extends Component{
  render(){
    return(
      <div className="header">
        <Link to="/" style={{textDecoration: 'none'}}><h1>Petful</h1></Link>
      </div>
    )
  }
}