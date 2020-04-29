import React from "react";
import axios from "axios";

class WebCam extends React.Component {
  constructor() {
    super();
    this.state = {
      webcamView: [],
    };
  }

  componentDidMount() {
    const IDplaces = "1259146823";
    const urlBase = `https://api.windy.com/api/webcams/v2/list/webcam=`;
    const urlEnd = `?show=webcams:image,location,player&key=Gi4RuYGR0su3SKtxIGsWhfmLuJA4sA9Q`;
    const url = `${urlBase}${IDplaces}${urlEnd}`;

    axios.get(url).then((res) => {
      this.setState({ webcamView: res.data.result.webcams[0].player.lifetime });
      console.log(this.state.webcamView);
      console.log(res.data);
    });
  }

  render() {
    console.log(this.state.webcamView.embed);
    return (
      <div>
        <iframe src={this.state.webcamView.embed}></iframe>
      </div>
    );
  }
}

export default WebCam;
