import React from 'react';
import './CharComponent.css'
import { map } from 'rsvp';

const CharComponent = (props) => {    
  
  return (
    <div className="CharComponent" onClick={props.click}>{props.char}</div>
  )
}

export default CharComponent;
