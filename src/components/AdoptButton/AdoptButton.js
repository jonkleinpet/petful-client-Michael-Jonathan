import React from 'react';

export default function AdoptButton(props) {
  const { handleStart } = props;
  return (
    <button onClick={() => handleStart()}>Adopt Now!</button>
  )
}