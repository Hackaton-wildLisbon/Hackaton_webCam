import React from 'react';
import axios from 'axios';
import SelectCountry from './SelectCountry';
import Information from './Information';
import WebCam from './WebCam';
import PlaceList from './PlaceList';
import Loading from './Loading';
import './Home.css';
import sonic from '../assets/sonic.gif';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      countriesList: [],
      countryId: '',
      country: '',
      placeList: [],
      location: '',
      locationID: '',
      webcamView: [],
      infos: [],
      loadingwebCam: false,
      // loadingLoc: false,
    };

    this.handleCountryId = this.handleCountryId.bind(this);
    this.getPlaceList = this.getPlaceList.bind(this);
    this.getInfo = this.getInfo.bind(this);
    this.getInfoCountry = this.getInfoCountry.bind(this);
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

  handleCountryId = (country) => {
    const selectedCountry = this.state.countriesList.find((el) => {
      if (country === el.name) {
        return el.id;
      }
    });
    this.setState({ countryId: selectedCountry.id }, () => {
      this.getPlaceList();
    });
  };

  getPlaceList() {
    // const loadingLoc= true;
    // this.setState({loadingLoc})
    axios
      .get(
        `https://api.windy.com/api/webcams/v2/list/country=${this.state.countryId}?key=Gi4RuYGR0su3SKtxIGsWhfmLuJA4sA9Q`,
      )
      .then((res) => {
        this.setState({
          // loadingLoc:false,
          placeList: res.data.result.webcams,
        });
      });
  }

  handleSelectLocation = (e) => {
    const location = e.target.value;
    this.setState({ location });
    this.getInfo(location);
  };

  getInfo(location) {
    const selectedLocation = this.state.placeList.find(function (el) {
      if (location === el.title) {
        return el.title;
      }
    });
    this.setState({ locationID: selectedLocation.id }, () => {
      this.getWebCam(selectedLocation.id);
      this.getInfoCountry(selectedLocation.id);
    });
  }

  getWebCam(locationID) {
    const loadingwebCam = true;
    this.setState({ loadingwebCam });
    const urlBase = `https://api.windy.com/api/webcams/v2/list/webcam=`;
    const urlEnd = `?show=webcams:image,location,player&key=Gi4RuYGR0su3SKtxIGsWhfmLuJA4sA9Q`;
    const url = `${urlBase}${locationID}${urlEnd}`;

    axios.get(url).then((res) => {
      this.setState({
        loadingwebCam: true,
        webcamView: res.data.result.webcams[0].player.lifetime,
      });
    });
  }

  getInfoCountry(locationID) {
    const urlBase = `https://api.windy.com/api/webcams/v2/list/webcam=`;
    const urlEnd = `?show=webcams:image,location,player&key=Gi4RuYGR0su3SKtxIGsWhfmLuJA4sA9Q`;
    const url = `${urlBase}${locationID}${urlEnd}`;

    axios.get(url).then((res) => {
      this.setState({
        loadingwebCam: false,
        infos: res.data.result.webcams[0].location,
      });
    });
  }

  render() {
    console.log(this.state.loadingwebCam);
    // {const optionList = this.state.placeList.map((el) => el.title).sort()
    //   const uniqueSet = new Set(optionList);
    // const optionClean = [...uniqueSet]}
    return (
      <>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            flexWrap: 'wrap',
            alignItems: 'center',
          }}
        >
          <h1>Wild Winds</h1>
          <span>
            <img className="sonic" src={sonic} alt="running sonic" />
          </span>
          <p>Choose a country and then the location to load the camera</p>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            flexWrap: 'wrap',
            alignItems: 'center',
          }}
        >
          <div>
            <SelectCountry
              options={this.state.countriesList.map((el) => el.name).sort()}
              value={this.state.country}
              handleSelectCountry={this.handleSelectCountry}
            />
          </div>

          <div>
            {this.state.LoadingLoc ? (
              <Loading />
            ) : (
              <PlaceList
                options={this.state.placeList.map((el) => el.title).sort()}
                value={this.state.location}
                handleSelectLocation={this.handleSelectLocation}
              />
            )}
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          {this.state.loadingwebCam === true ? (
            <Loading />
          ) : (
            <WebCam embed={this.state.webcamView.embed} />
          )}

          <Information
            city={this.state.infos.city}
            country={this.state.infos.country}
            continent={this.state.infos.continent}
            region={this.state.infos.region}
            latitude={this.state.infos.latitude}
            longitude={this.state.infos.longitude}
            timezone={this.state.infos.timezone}
            wikipedia={this.state.infos.wikipedia}
          />
        </div>
      </>
    );
  }
}
export default Home;
