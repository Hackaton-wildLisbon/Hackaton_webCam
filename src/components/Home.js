import React from "react";
import axios from "axios";
import SelectCountry from "./SelectCountry";
import Information from "./Information";
import WebCam from "./WebCam";
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
	  locationID: '',
	  webcamView: [],
	  infos: [],
	}
	  
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
		this.getWebCam(selectedLocation.id)
		this.getInfoCountry(selectedLocation.id)
	
	});
}
	

  getWebCam(locationID) {
	
    const urlBase = `https://api.windy.com/api/webcams/v2/list/webcam=`;
    const urlEnd = `?show=webcams:image,location,player&key=Gi4RuYGR0su3SKtxIGsWhfmLuJA4sA9Q`;
    const url = `${urlBase}${locationID}${urlEnd}`;

	console.log(url)

    axios.get(url).then((res) => {
      this.setState({ webcamView: res.data.result.webcams[0].player.lifetime });
      console.log(this.state.webcamView);
      console.log(res.data);
    });
  
  }


  getInfoCountry(locationID) {
	  
	  const urlBase = `https://api.windy.com/api/webcams/v2/list/webcam=`;
	  const urlEnd = `?show=webcams:image,location,player&key=Gi4RuYGR0su3SKtxIGsWhfmLuJA4sA9Q`;
	  const url = `${urlBase}${locationID}${urlEnd}`;
  
	  axios.get(url).then((res) => {
	    this.setState({ infos: res.data.result.webcams[0].location });
	    console.log(this.state.infos);
	  });
	}
  

  render() {
    // console.log(this.state.placeList);
    console.log(this.state.locationID);
    // console.log(this.state.webcamView);
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
            value={this.state.location}
			// handleCountryId={this.handleCountryId}
			handleSelectLocation={this.handleSelectLocation}
			
          />
        </div>
		<div>
			<WebCam 
			embed = {this.state.webcamView.embed}
			/>
			<Information
			city= {this.state.infos.city}
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
