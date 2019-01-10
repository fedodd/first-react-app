import React from 'react';

const validationComponent = (props) => {

  const minLength = 5;
  let ValidationText = '';

  if (props.textLength < minLength) {
    ValidationText = (
      <div>
        <p>Text too short.</p>
      </div>
    )
  }

  return (
    <div>
      {ValidationText}
    </div>
    
  )
}

export default validationComponent;