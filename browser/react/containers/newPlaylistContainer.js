'use strict';

import React, {Component} from 'react';

import NewPlaylist from '../components/newPlaylist.js;'

export default class NewPlaylistContainer extends Component {
	constructor(props) {
		super(props);
		this.state = { newPlaylistName: '' };
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	};

	render() {
		return (
			<div>
				<NewPlaylist handleChange={this.handleChange}
					handleSubmit={this.handleSubmit} />
			</div>
		)
	};

	handleChange(event) {
		const newPlaylistName = event.target.value;
		this.setState({newPlaylistName})
	};

	handleSubmit() {
		console.log('NEW NAME', this.state.newPlaylistName);
	}
};
