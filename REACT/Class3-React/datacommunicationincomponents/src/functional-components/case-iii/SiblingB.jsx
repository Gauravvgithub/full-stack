import React from 'react'
  
export default function ChildB ({ receivedMessage }) {
    return (
      <div>
         <h1>{receivedMessage}</h1>
      </div>
    );
  };