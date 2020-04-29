import React from "react";

const WebCam = ({embed}) => {

    return (
      <div>
        <iframe src={embed}></iframe>
      </div>
    );
  }

export default WebCam;
