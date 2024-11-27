import React from 'react'

export default function ChildA ({ sendToSibling }) {
        const siblingMessage = "Hello from Child A!";
        return (
          <button onClick={() => sendToSibling(siblingMessage)}>
            Send to Child B
          </button>
        );
      };