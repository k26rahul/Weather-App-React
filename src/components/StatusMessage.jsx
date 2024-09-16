import React from 'react';
import './css/StatusMessage.css';

function StatusMessage({ message }) {
  return <div className="status-message">{message}</div>;
}

export default StatusMessage;
