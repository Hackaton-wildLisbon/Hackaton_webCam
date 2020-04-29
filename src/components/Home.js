import React from 'react';
import axios from 'axios';
import SelectCountry from './SelectCountry';

class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			countriesList: [],
			country: ''
		};
	}

	componentDidMount() {
		axios
			.get(`https://api.windy.com/api/webcams/v2/list?show=countries&key=Gi4RuYGR0su3SKtxIGsWhfmLuJA4sA9Q`)
			.then((res) => {
				this.setState({ countriesList: res.data.result.countries });
				console.log(this.state.countriesList);
			});
	}

	handleSelectChange = (e) => {
		const country = e.target.value;
		this.setState({ country });
	};

	render() {
		console.log(this.state.countriesList);
		return (
			<div>
				<h1>Please, select a country</h1>
				<SelectCountry
					options={this.state.countriesList.map((el) => el.name)}
					value={this.state.country}
					handleChange={this.handleSelectChange}
				/>
			</div>
		);
	}
}
export default Home;

/* https://api.windy.com/api/webcams/v2/list?show=countries&key=Gi4RuYGR0su3SKtxIGsWhfmLuJA4sA9Q*/
