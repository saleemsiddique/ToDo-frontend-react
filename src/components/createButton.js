// src/components/Button.js
import React from 'react';

const CreateButton = ({ onClick, label, ...props }) => {
  return (
    <button onClick={onClick} {...props}>
      {label}
    </button>
  );
};

export default CreateButton;
