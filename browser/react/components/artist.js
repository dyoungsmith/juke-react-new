'use strict';

import React, {Component} from 'react';
import {Link} from 'react-router';
import Albums from './albums.js';
import Songs from './songs.js';


export default class Artist extends Component {
	render() {
		const selectedArtist = this.props.selectedArtist;
		const children = this.props.children;
		const propsToPassToChildren = {
			albums: selectedArtist.albums,
			songs: selectedArtist.songs,
			currentSong: this.props.currentSong,
			isPlaying: this.props.isPlaying,
			play: this.props.play,
			pause: this.props.pause
		};

		return (
			<div>
			  <h3>{selectedArtist.name}</h3>
			  <ul className="nav nav-tabs">
			  	<li><Link to={`/artists/${selectedArtist.id}/albums`}>ALBUMS</Link></li>
			  	<li><Link to={`/artists/${selectedArtist.id}/songs`}>SONGS</Link></li>
			  </ul>
			  {children && React.cloneElement(children, propsToPassToChildren)}
			</div>
		)
	};

	componentDidMount() {
		const artistId = this.props.params.artistId;
		const selectArtist = this.props.selectArtist;
		selectArtist(artistId);
	}
};
