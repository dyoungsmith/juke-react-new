'use strict';

import React, {Component} from 'react';

import FilterInput from '../components/filterInput.js';
import Artists from '../components/artists.js';


export default class FilterableArtistsContainer extends Component {
	constructor(props) {
		super(props);
		this.state = { searchInput: '' };
		this.handleChange = this.handleChange.bind(this);
	};

	render() {
		const inputVal = this.state.searchInput;
		const filteredArtists = this.props.artists.filter(artist => {
			return artist.name.toLowerCase().indexOf(inputVal.toLowerCase()) !== -1
		});

		return (
			<div>
				<FilterInput handleChange={this.handleChange} />
				<Artists artists={filteredArtists} />
			</div>
		)
	};

	handleChange(event) {
		const searchInput = event.target.value;
		this.setState({searchInput});
	};
};
