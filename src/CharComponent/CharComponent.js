import React from 'react';
import './CharComponent.css'
import { map } from 'rsvp';

const CharComponent = (props) => {

  let letters = props.text;
    
  return letters.map(elem => {
    return <div className="CharComponent" onClick={props.click}>{elem}</div>
  })
}

export default CharComponent;