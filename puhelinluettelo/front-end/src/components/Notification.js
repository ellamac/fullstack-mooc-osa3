import React from 'react';

const Notification = ({ message, color }) => {
  const errorStyle = {
    color: color,
    backgroundColor: 'lightgrey',
    border: 'solid 3px',
    borderColor: color,
    borderRadius: 5,
    padding: 10,
    margin: '10px 0'
  };

  if (message === null) {
    return null;
  }

  return <div style={errorStyle}>{message}</div>;
};

export default Notification;
