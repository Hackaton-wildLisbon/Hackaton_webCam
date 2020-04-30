import React from 'react';
import './WebCam.css';

const WebCam = ({ embed }) => {
  return (
    <div>
      <iframe src={embed} width="400" height="300" title="Inline Frame Example"></iframe>
    </div>
  );
};

export default WebCam;
