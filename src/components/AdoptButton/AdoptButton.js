import React from 'react';
import "./styles/adoptbutton.css";

export default function AdoptButton(props) {
  const { handleStart, type } = props;
  return (
    <button type={type} onClick={(e) => handleStart(e)}>Adopt Now!</button>
  )
}