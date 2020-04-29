import React from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";

const Informations = ({city, country,continent, region, latitude, longitude, timezone, wikipedia}) => {

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>{city}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          {country} - {continent} - {region}
        </Card.Subtitle>
        <Card.Text>Longitude: {longitude}</Card.Text>
        <Card.Text>Latitude: {latitude}</Card.Text>
        <Card.Text>Timezone: {timezone}</Card.Text>
        <Card.Link href={wikipedia}>Wikipedia page</Card.Link>
      </Card.Body>
    </Card>
  );

}


  // componentDidMount() {
  //   const IDplaces = "1259146823";
  //   const urlBase = `https://api.windy.com/api/webcams/v2/list/webcam=`;
  //   const urlEnd = `?show=webcams:image,location,player&key=Gi4RuYGR0su3SKtxIGsWhfmLuJA4sA9Q`;
  //   const url = `${urlBase}${IDplaces}${urlEnd}`;

  //   axios.get(url).then((res) => {
  //     this.setState({ infos: res.data.result.webcams[0].location });
  //     console.log(this.state.infos);
  //   });
  // }



export default Informations;

