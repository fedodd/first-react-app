import React from 'react';
import './UserOutput.css';
import { red } from 'ansi-colors';


const userOutput = (props) => {
  const style = {
    color: 'red',
    fontWeight: 'bold'
  }

  return (
    <div className="UserOutput">
      <p>Age of {props.name}</p>
      <p style={style}>That's amazing!</p>
    </div>
  )
}

export default userOutput;