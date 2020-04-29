import React from 'react';
import axios from 'axios';
import SelectCountry from './SelectCountry';
import Information from './Information';
import WebCam from './WebCam';
import PlaceList from './PlaceList';
import './Home.css';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      countriesList: [],
      countryId: '',
      country: '',
      placeList: [],
      location: '',
    };
    this.handleCountryId = this.handleCountryId.bind(this);
    this.getPlaceList = this.getPlaceList.bind(this);
  }

  componentDidMount() {
    axios
      .get(
        `https://api.windy.com/api/webcams/v2/list?show=countries&key=Gi4RuYGR0su3SKtxIGsWhfmLuJA4sA9Q`,
      )
      .then((res) => {
        this.setState({ countriesList: res.data.result.countries });
      });
  }

  handleSelectCountry = (e) => {
    const country = e.target.value;
    this.setState({ country: country });
    this.handleCountryId(country);
  };

  handleCountryId(country) {
    const selectedCountry = this.state.countriesList.find(function (el) {
      if (country === el.name) {
        return el.id;
      }
    });
    this.setState({ countryId: selectedCountry.id }, () => {
      this.getPlaceList(country);
    });
  }

  getPlaceList(country) {
    axios
      .get(
        `https://api.windy.com/api/webcams/v2/list/country=${this.state.countryId}?key=Gi4RuYGR0su3SKtxIGsWhfmLuJA4sA9Q`,
      )
      .then((res) => {
        this.setState({ placeList: res.data.result.webcams });
      });
    // if (this.state.country !== country) {
    //   this.setState({ placeList: [] });
    // }
  }

  render() {
    console.log(this.state.placeList);
    return (
      <>
        <h1>Wild Winds</h1>
        <p>Choose a country and then the location to load the camera</p>
        <div>
          <SelectCountry
            options={this.state.countriesList.map((el) => el.name)}
            value={this.state.country}
            handleSelectCountry={this.handleSelectCountry}
          />
        </div>

        <div>
          <PlaceList
            options={this.state.placeList.map((el) => el.title)}
            title={this.state.title}
            handleCountryId={this.handleCountryId}
          />
        </div>
      </>
    );
  }
}
export default Home;
