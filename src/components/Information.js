import React from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";

class Informations extends React.Component {
  constructor() {
    super();
    this.state = {
      infos: [],
    };
  }

  componentDidMount() {
    const IDplaces = "1259146823";
    const urlBase = `https://api.windy.com/api/webcams/v2/list/webcam=`;
    const urlEnd = `?show=webcams:image,location,player&key=Gi4RuYGR0su3SKtxIGsWhfmLuJA4sA9Q`;
    const url = `${urlBase}${IDplaces}${urlEnd}`;

    axios.get(url).then((res) => {
      this.setState({ infos: res.data.result.webcams[0].location });
      console.log(this.state.infos);
    });
  }

  render() {
    const { infos } = this.state;
    return (
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>{infos.city}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {infos.country} - {infos.continent} - {infos.region}
          </Card.Subtitle>
          <Card.Text>Longitude: {infos.longitude}</Card.Text>
          <Card.Text>Latitude: {infos.latitude}</Card.Text>
          <Card.Text>Timezone: {infos.timezone}</Card.Text>
          <Card.Link href={infos.wikipedia}>Wikipedia page</Card.Link>
        </Card.Body>
      </Card>
    );
  }
}

export default Informations;

/*city: "Bagneres-de-Bigorre"
continent: "Europe"
country: "France"
region: "Occitania"

latitude: 42.935564
longitude: 0.152779
"
timezone: "Europe/Paris"
wikipedia: "https://fr.wikipedia.org/wiki/Bagnères-de-Bigorre"*/
