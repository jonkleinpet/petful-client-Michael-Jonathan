import React from 'react';

export default function AdoptButton(props) {
  const { handleStart, type } = props;
  return (
    <button type={type} onClick={(e) => handleStart(e)}>Adopt Now!</button>
  )
}