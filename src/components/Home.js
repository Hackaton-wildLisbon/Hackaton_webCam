import React from 'react';
import axios from 'axios';
import SelectCountry from './SelectCountry';
import PlaceList from './PlaceList';

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
      this.getPlaceList();
    });
  }

  getPlaceList() {
    axios
      .get(
        `https://api.windy.com/api/webcams/v2/list/country=${this.state.countryId}?key=Gi4RuYGR0su3SKtxIGsWhfmLuJA4sA9Q`,
      )
      .then((res) => {
        this.setState({ placeList: res.data.result.webcams });
      });
  }

  render() {
    console.log(this.state.placeList);
    return (
      <>
        <div>
          <h1>Please, select a country</h1>
          <SelectCountry
            options={this.state.countriesList.map((el) => el.name)}
            value={this.state.country}
            handleSelectCountry={this.handleSelectCountry}
          />
        </div>

        <div>
          <h1>Please, select a location</h1>
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

/* https://api.windy.com/api/webcams/v2/list?show=countries&key=Gi4RuYGR0su3SKtxIGsWhfmLuJA4sA9Q*/
