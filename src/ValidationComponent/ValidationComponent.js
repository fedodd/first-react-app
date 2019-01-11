import React from 'react';

const validationComponent = (props) => {

  const minLength = 5;
  let ValidationText = 'Text too short.';

  if (props.textLength > minLength) {
    ValidationText = 'Text long enough.';
  } 

  return (
    <div>
      <p>{ValidationText}</p>
    </div>
    
  )
}

export default validationComponent;