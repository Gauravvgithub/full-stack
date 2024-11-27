import React, { useState } from 'react';
import ChildA from './SiblingA';
import ChildB from './SiblingB';
export default function ParentComponent()  {
  const [message, setMessage] = useState("");

  const handleMessage = (data) => {
    setMessage(data);
  };

  return (
    <div>
      <ChildA sendToSibling={handleMessage} />
      <ChildB receivedMessage={message} />
    </div>
  );
};