import React from 'react';
import './WebCam.css';

const WebCam = ({ embed }) => {
  return (
    <div className="iframe-div">
      <iframe src={embed} width="400" height="300"></iframe>
    </div>
  );
};

export default WebCam;
