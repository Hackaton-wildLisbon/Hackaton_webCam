import React from "react";
import axios from "axios";
import SelectCountry from "./SelectCountry";
import Information from "./Information";
import WebCam from "./WebCam";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      countriesList: [],
      country: "",
      webcamView: [],
      infos: [],
      IDplaces: "1259146823",
    };
  }
  componentDidMount() {
    axios
      .get(
        `https://api.windy.com/api/webcams/v2/list?show=countries&key=Gi4RuYGR0su3SKtxIGsWhfmLuJA4sA9Q`
      )
      .then((res) => {
        this.setState({ countriesList: res.data.result.countries });
      });
  }

  handleSelectChange = (e) => {
    const country = e.target.value;
    this.setState({ country });
  };

  render() {
    return (
      <div>
        <h1>Please, select a country</h1>
        <SelectCountry
          options={this.state.countriesList.map((el) => el.name)}
          value={this.state.country}
          handleChange={this.handleSelectChange}
        />
        <WebCam />
        <Information />
      </div>
    );
  }
}
export default Home;

/* https://api.windy.com/api/webcams/v2/list?show=countries&key=Gi4RuYGR0su3SKtxIGsWhfmLuJA4sA9Q*/
